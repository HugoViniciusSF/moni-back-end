import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreateQuestoesDto } from '../dto/create-questoes.dto'
import { UpdateQuestoesDto } from '../dto/update-questoes.dto'
import { Questoes } from '../entities/questoes.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

export interface QuestoesRepositoryInterface {
    findAll(): Promise<Questoes[]>
    findOneBy(id: {id: number}): Promise<Questoes | null>
    delete(id: number): Promise<void>
    create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes>
    update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<void>
}

@Injectable()
export class QuestoesRepository implements QuestoesRepositoryInterface {
    constructor(
        @InjectRepository(Questoes)
        private questoesRepository: Repository<Questoes>,
    ) {}

    async findAll(): Promise<Questoes[]> {
        return this.questoesRepository.find();
    }

    async findOneBy(id: {id: number}): Promise<Questoes | null> {
        return this.questoesRepository.findOneBy( id );
    }

    async create(createQuestoesDto: CreateQuestoesDto): Promise<Questoes> {
        return await this.questoesRepository.save(createQuestoesDto);
    }

    async update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<any> {
        return await this.questoesRepository.update(id, updateQuestoesDto);
    }

    async delete(id: number): Promise<void> {
        await this.questoesRepository.delete(id);
    }
}