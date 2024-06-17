import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateReunioesDto } from './dto/create-reunioes.dto';
import { UpdateReunioesDto } from './dto/update-reunioes.dto';
import { Reunioes } from './entities/reunioes.entity';
import { ReunioesRepository } from './repo/reunioes.repository';
import { BadRequestException } from '@nestjs/common';
export interface ReunioesServiceInterface {
  findAll(): Promise<Reunioes[]>
  findOne(id: string): Promise<Reunioes | null>
  remove(id: string): Promise<void>
  create(createReunioesDto: CreateReunioesDto): Promise<Reunioes>
  update(id: string, updateReunioesDto: UpdateReunioesDto): Promise<void>
}

@Injectable()
export class ReunioesService implements ReunioesServiceInterface{
  constructor(
    private reunioesRepository: ReunioesRepository,
  ) {}

  findAll(): Promise<Reunioes[]> {
    return this.reunioesRepository.findAll();
  }

  async findOne(id: string): Promise<Reunioes | null> {
    return this.reunioesRepository.findOneBy({ id });
  }
  
  async create(createReunioesDto: CreateReunioesDto): Promise<Reunioes> {

    createReunioesDto = validateInput(createReunioesDto);

    return await this.reunioesRepository.create(createReunioesDto);
  }
  
  async update(id: string, updateReunioesDto: UpdateReunioesDto): Promise<void> {
    try{
      const result = await this.reunioesRepository.update(id, updateReunioesDto);
      console.log(result);
      if(result.affected === 0){
        throw new HttpException('Reunião não encontrado', HttpStatus.NOT_FOUND);
      }
    }
    catch(error){
      throw new HttpException('Erro ao tentar atualizar a Reunião',
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string): Promise<void> {
    try{
      await this.reunioesRepository.delete(id); 
    }
    catch(error){
      throw new HttpException('Erro ao tentar deletar a Reunião',
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

function validateInput(createReunioesDto: CreateReunioesDto): CreateReunioesDto {
  // Exemplo de validação simples
  if (!createReunioesDto.nome || createReunioesDto.nome.trim().length === 0) {
    throw new BadRequestException('O nome é obrigatório.');
  }

  if (!createReunioesDto.descricao || createReunioesDto.descricao.trim().length === 0) {
    throw new BadRequestException('O conteúdo é obrigatório.');
  }
  if (!createReunioesDto.fotoURL || !isValidHttpsUrl(createReunioesDto.fotoURL)) {
    throw new BadRequestException('A URL da foto é inválida');
  }

  return { ...createReunioesDto,
  };

}