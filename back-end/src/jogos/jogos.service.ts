import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { UpdateJogosDto } from './dto/update-jogos.dto';
import { Jogos } from './entities/jogos.entity';
import { JogosRepository } from './repo/jogos.repository';
import { BadRequestException } from '@nestjs/common';
export interface JogosServiceInterface {
  findAll(): Promise<Jogos[]>
  findOne(id: string): Promise<Jogos | null>
  delete(id: string): Promise<void>
  create(createJogosDto: CreateJogosDto): Promise<Jogos>
  update(id: string, updateJogosDto: UpdateJogosDto): Promise<void>
}

@Injectable()
export class JogosService implements JogosServiceInterface{
  constructor(
    private jogosRepository: JogosRepository,
  ) {}

  findAll(): Promise<Jogos[]> {
    return this.jogosRepository.findAll();
  }

  async findOne(id: string): Promise<Jogos | null> {
    return this.jogosRepository.findOneBy({ id });
  }
  
  async create(createJogosDto: CreateJogosDto): Promise<Jogos> {

    createJogosDto = validateInput(createJogosDto);

    return await this.jogosRepository.create(createJogosDto);
  }
  
  async update(id: string, updateJogosDto: UpdateJogosDto): Promise<void> {
    try{
      const result = await this.jogosRepository.update(id, updateJogosDto);
      console.log(result);
      if(result.affected === 0){
        throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
      }
    }
    catch(error){
      throw new HttpException('Erro ao tentar atualizar o jogo',
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<void> {
    try{
      await this.jogosRepository.delete(id); 
    }
    catch(error){
      throw new HttpException('Erro ao tentar deletar o jogo',
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

function isValidHttpsUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

function validateInput(createJogosDto: CreateJogosDto): CreateJogosDto {
  // Exemplo de validação simples
  if (!createJogosDto.nome || createJogosDto.nome.trim().length === 0) {
    throw new BadRequestException('O nome é obrigatório.');
  }

  if (!createJogosDto.descricao || createJogosDto.descricao.trim().length === 0) {
    throw new BadRequestException('O conteúdo é obrigatório.');
  }
  if (!createJogosDto.fotoURL || !isValidHttpsUrl(createJogosDto.fotoURL)) {
    throw new BadRequestException('A URL da foto é inválida');
  }

  return { ...createJogosDto,
  };

}