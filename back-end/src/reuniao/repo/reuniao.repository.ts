import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreateReuniaoDto } from '../dto/create-reuniao.dto'
import { UpdateReuniaoDto } from '../dto/update-reuniao.dto'
import { Reuniao } from '../entities/reuniao.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

export interface ReuniaoRepositoryInterface {
    findAll(): Promise<Reuniao[]>
    findOneBy(id: {id: string}): Promise<Reuniao | null>
    delete(id: string): Promise<void>
    create(createReunioesDto: CreateReuniaoDto): Promise<Reuniao>
    update(id: string, updateReunioesDto: UpdateReuniaoDto): Promise<void>
}

@Injectable()
export class ReuniaoRepository implements ReuniaoRepositoryInterface {
    constructor(
        @InjectRepository(Reuniao)
        private reuniaoRepository: Repository<Reuniao>,
    ) {}

    async findAll(): Promise<Reuniao[]> {
        return this.reuniaoRepository.find();
    }

    async findOneBy(id: {id: string}): Promise<Reuniao | null> {
        return this.reuniaoRepository.findOneBy( id );
    }

    async create(createReuniaoDto: CreateReuniaoDto): Promise<Reuniao> {
        return await this.reuniaoRepository.save(createReuniaoDto);
    }

    async update(id: string, updateReuniaoDto: UpdateReuniaoDto): Promise<any> {
        return await this.reuniaoRepository.update(id, updateReuniaoDto);
    }

    async delete(id: string): Promise<void> {
        await this.reuniaoRepository.softDelete(id);
    }
}