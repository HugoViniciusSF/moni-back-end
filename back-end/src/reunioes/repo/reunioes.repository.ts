import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreateReunioesDto } from '../dto/create-reunioes.dto'
import { UpdateReunioesDto } from '../dto/update-reunioes.dto'
import { Reunioes } from '../entities/reunioes.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

export interface ReunioesRepositoryInterface {
    findAll(): Promise<Reunioes[]>
    findOneBy(id: {id: string}): Promise<Reunioes | null>
    delete(id: string): Promise<void>
    create(createReunioesDto: CreateReunioesDto): Promise<Reunioes>
    update(id: string, updateReunioesDto: UpdateReunioesDto): Promise<void>
}

@Injectable()
export class ReunioesRepository implements ReunioesRepositoryInterface {
    constructor(
        @InjectRepository(Reunioes)
        private reunioesRepository: Repository<Reunioes>,
    ) {}

    async findAll(): Promise<Reunioes[]> {
        return this.reunioesRepository.find();
    }

    async findOneBy(id: {id: string}): Promise<Reunioes | null> {
        return this.reunioesRepository.findOneBy( id );
    }

    async create(createReunioesDto: CreateReunioesDto): Promise<Reunioes> {
        return await this.reunioesRepository.save(createReunioesDto);
    }

    async update(id: string, updateReunioesDto: UpdateReunioesDto): Promise<any> {
        return await this.reunioesRepository.update(id, updateReunioesDto);
    }

    async delete(id: string): Promise<void> {
        await this.reunioesRepository.softDelete(id);
    }
}