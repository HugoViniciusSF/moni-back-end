import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateQuestoesDto } from './dto/create-questoes.dto';
import { UpdateQuestoesDto } from './dto/update-questoes.dto';
import { Questoes } from './entities/questoes.entity';
import { QuestoesRepository } from './repo/questoes.repository';
import { BadRequestException } from '@nestjs/common';
import { EntityServiceInterface } from '../entities/entity.service';


@Injectable()
export class QuestoesService implements EntityServiceInterface {
  constructor(
    private questoesRepository: QuestoesRepository,
  ) { }

  findAll(): Promise<Questoes[]> {
    return this.questoesRepository.findAll();
  }

  async findOne(id: string): Promise<Questoes | null> {
    return this.questoesRepository.findOneBy({ id });
  }

  async create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes> {

    createQuestoesDto = validateInput(createQuestoesDto);

    return await this.questoesRepository.create(createQuestoesDto);
  }

  async update(id: string, updateQuestoesDto: UpdateQuestoesDto): Promise<void> {
    try {
      const result = await this.questoesRepository.update(id, updateQuestoesDto);
      console.log(result);
      if (result.affected === 0) {
        throw new HttpException('Questão não encontrada', HttpStatus.NOT_FOUND);
      }
    }
    catch (error) {
      throw new HttpException('Erro ao tentar atualizar a questão',
        HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.questoesRepository.delete(id);
    }
    catch (error) {
      throw new HttpException('Erro ao tentar deletar a questão',
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

function validateInput(createQuestoesDto: CreateQuestoesDto): CreateQuestoesDto {
  // Exemplo de validação simples
  if (!createQuestoesDto.nome || createQuestoesDto.nome.trim().length === 0) {
    throw new BadRequestException('O nome é obrigatório.');
  }

  if (!createQuestoesDto.descricao || createQuestoesDto.descricao.trim().length === 0) {
    throw new BadRequestException('O conteúdo é obrigatório.');
  }
  if (!createQuestoesDto.fotoURL || !isValidHttpsUrl(createQuestoesDto.fotoURL)) {
    throw new BadRequestException('A URL da foto é inválida');
  }

  return {
    ...createQuestoesDto,
  };

}