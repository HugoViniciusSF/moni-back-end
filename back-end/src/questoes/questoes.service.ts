import { Injectable } from '@nestjs/common';
import { CreateQuestoesDto } from './dto/create-questoes.dto';
import { UpdateQuestoesDto } from './dto/update-questoes.dto';
import { Questoes } from './entities/questoes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestoesService {
  constructor(
    @InjectRepository(Questoes)
    private questoesRepository: Repository<Questoes>,
  ) {}

  findAll(): Promise<Questoes[]> {
    return this.questoesRepository.find();
  }

  findOne(id: number): Promise<Questoes | null> {
    return this.questoesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.questoesRepository.delete(id);
  }

  async create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes> {
    return this.questoesRepository.save(createQuestoesDto);
  }

  async update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<void> {
    await this.questoesRepository.update(id, updateQuestoesDto);
  }
}
