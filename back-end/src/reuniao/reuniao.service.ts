import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';
import { Reuniao } from './entities/reuniao.entity';
import { ReuniaoRepository } from './repo/reuniao.repository';
import { BadRequestException } from '@nestjs/common';
import { EntityServiceInterface } from '../entities/entity.service';

@Injectable()
export class ReuniaoService implements EntityServiceInterface {
  constructor(
    private reuniaoRepository: ReuniaoRepository,
  ) { }

  findAll(): Promise<Reuniao[]> {
    return this.reuniaoRepository.findAll();
  }

  async findOne(id: string): Promise<Reuniao | null> {
    return this.reuniaoRepository.findOneBy({ id });
  }

  async create(createReuniaoDto: CreateReuniaoDto): Promise<Reuniao> {
    try {
      if (this.validateInput(createReuniaoDto)) {
        return this.reuniaoRepository.create(createReuniaoDto);
      }
    }
    catch (BadRequestException) {
      throw new HttpException('Erro ao tentar criar a reunião',
        HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(id: string, updateReuniaoDto: UpdateReuniaoDto): Promise<void> {
    try {
      const result = await this.reuniaoRepository.update(id, updateReuniaoDto);
      console.log(result);
      if (result.affected === 0) {
        throw new HttpException('Reunião não encontrada', HttpStatus.NOT_FOUND);
      }
    }
    catch (error) {
      throw new HttpException('Erro ao tentar atualizar a reunião',
        HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.reuniaoRepository.delete(id);
    }
    catch (error) {
      throw new HttpException('Erro ao tentar deletar a reunião',
        HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  validateInput(createReuniaoDto: CreateReuniaoDto): boolean {
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

    return true;
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