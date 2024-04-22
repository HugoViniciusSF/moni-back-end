import { HttpException, Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { CreateQuestoesDto } from './dto/create-questoes.dto';
import { UpdateQuestoesDto } from './dto/update-questoes.dto';
import { Questoes } from './entities/questoes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class QuestoesService {
  constructor(
    @InjectRepository(Questoes)
    private questoesRepository: Repository<Questoes>,
  ) {}

  findAll(): Promise<Questoes[]> {
    return this.questoesRepository.find();
  }

  async findOne(id: number): Promise<Questoes | null> {
    const result = await this.questoesRepository.findOneBy({ id });
      if(!result){
        throw new HttpException(`Questão ${id} não encontrada`,
        HttpStatus.NOT_FOUND);
      }
    return result;
  }

  async remove(id: number): Promise<void> {
    const result = await this.questoesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Questão com ID ${id} não encontrada`);
    }
  }

  async create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes> {
    try {
      return await this.questoesRepository.save(createQuestoesDto);
    } catch (error) {
      throw new HttpException('Erro ao criar a questão.',
       HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<void> {
    try{
      const result = await this.questoesRepository.update(id, updateQuestoesDto);
      if(result.affected === 0){
        throw new HttpException('Questão não encontrada', HttpStatus.NOT_FOUND);
      }
    }
    catch(error){
      throw new HttpException('Erro ao tentar atualizar a questão',
       HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
