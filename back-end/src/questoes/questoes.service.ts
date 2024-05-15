import { HttpException, Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { CreateQuestoesDto } from './dto/create-questoes.dto';
import { UpdateQuestoesDto } from './dto/update-questoes.dto';
import { Questoes } from './entities/questoes.entity';
import { QuestoesRepository } from './repo/questoes.repository';
import { resourceLimits } from 'worker_threads';

export interface QuestoesServiceInterface {
  findAll(): Promise<Questoes[]>
  findOne(id: number): Promise<Questoes | null>
  delete(id: number): Promise<void>
  create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes>
  update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<void>
}

@Injectable()
export class QuestoesService implements QuestoesServiceInterface{
  constructor(
    private questoesRepository: QuestoesRepository,
  ) {}

  findAll(): Promise<Questoes[]> {
    return this.questoesRepository.findAll();
  }

  async findOne(id: number): Promise<Questoes | null> {
    return this.questoesRepository.findOneBy({ id });
  }
  
  async create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes> {
    return await this.questoesRepository.create(createQuestoesDto);
  }
  
  async update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<void> {
    try{
      const result = await this.questoesRepository.update(id, updateQuestoesDto);
      console.log(result);
      if(result.affected === 0){
        throw new HttpException('Questão não encontrada', HttpStatus.NOT_FOUND);
      }
    }
    catch(error){
      throw new HttpException('Erro ao tentar atualizar a questão',
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<void> {
    try{
      await this.questoesRepository.delete(id); 
    }
    catch(error){
      throw new HttpException('Erro ao tentar deletar a questão',
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
