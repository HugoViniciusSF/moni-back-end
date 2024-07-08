import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';
import { Reuniao } from './entities/reuniao.entity';
import { ReuniaoRepository } from './repo/reuniao.repository';
import { BadRequestException } from '@nestjs/common';
export interface ReuniaoServiceInterface {
  findAll(): Promise<Reuniao[]>
  findOne(id: string): Promise<Reuniao | null>
  delete(id: string): Promise<void>
  create(createReunioesDto: CreateReuniaoDto): Promise<Reuniao>
  update(id: string, updateReunioesDto: UpdateReuniaoDto): Promise<void>
}

@Injectable()
export class ReuniaoService implements ReuniaoServiceInterface{
  constructor(
    private reuniaoRepository: ReuniaoRepository,
  ) {}

  findAll(): Promise<Reuniao[]> {
    return this.reuniaoRepository.findAll();
  }

  async findOne(id: string): Promise<Reuniao | null> {
    return this.reuniaoRepository.findOneBy({ id });
  }
  
  async create(createReuniaoDto: CreateReuniaoDto): Promise<Reuniao> {

    createReuniaoDto = validateInput(createReuniaoDto);

    return await this.reuniaoRepository.create(createReuniaoDto);
  }
  
  async update(id: string, updateReuniaoDto: UpdateReuniaoDto): Promise<void> {
    try{
      const result = await this.reuniaoRepository.update(id, updateReuniaoDto);
      console.log(result);
      if(result.affected === 0){
        throw new HttpException('Reunião não encontrada', HttpStatus.NOT_FOUND);
      }
    }
    catch(error){
      throw new HttpException('Erro ao tentar atualizar a reunião',
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<void> {
    try{
      await this.reuniaoRepository.delete(id); 
    }
    catch(error){
      throw new HttpException('Erro ao tentar deletar a reunião',
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

function validateInput(createReuniaoDto: CreateReuniaoDto): CreateReuniaoDto {
  // Exemplo de validação simples
  if (!createReuniaoDto.nome || createReuniaoDto.nome.trim().length === 0) {
    throw new BadRequestException('O nome é obrigatório.');
  }

  if (!createReuniaoDto.descricao || createReuniaoDto.descricao.trim().length === 0) {
    throw new BadRequestException('O conteúdo é obrigatório.');
  }
  if (!createReuniaoDto.fotoURL || !isValidHttpsUrl(createReuniaoDto.fotoURL)) {
    throw new BadRequestException('A URL da foto é inválida');
  }

  return { ...createReuniaoDto,
  };

}