import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreateJogosDto } from '../dto/create-jogos.dto'
import { UpdateJogosDto } from '../dto/update-jogos.dto'
import { Jogos } from '../entities/jogos.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

export interface JogosRepositoryInterface {
    findAll(): Promise<Jogos[]>
    findOneBy(id: {id: string}): Promise<Jogos | null>
    delete(id: string): Promise<void>
    create(createJogosDto: CreateJogosDto): Promise<Jogos>
    update(id: string, updateJogosDto: UpdateJogosDto): Promise<void>
}

@Injectable()
export class JogosRepository implements JogosRepositoryInterface {
    constructor(
        @InjectRepository(Jogos)
        private jogosRepository: Repository<Jogos>,
    ) {}

    async findAll(): Promise<Jogos[]> {
        return this.jogosRepository.find();
    }

    async findOneBy(id: {id: string}): Promise<Jogos | null> {
        return this.jogosRepository.findOneBy( id );
    }

    async create(createJogosDto: CreateJogosDto): Promise<Jogos> {
        return await this.jogosRepository.save(createJogosDto);
    }

    async update(id: string, updateJogosDto: UpdateJogosDto): Promise<any> {
        return await this.jogosRepository.update(id, updateJogosDto);
    }

    async delete(id: string): Promise<void> {
        await this.jogosRepository.softDelete(id);
    }
}