import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreateQuestoesDto } from '../dto/create-questoes.dto'
import { UpdateQuestoesDto } from '../dto/update-questoes.dto'
import { Questoes } from '../entities/questoes.entity'
import { Repository } from 'typeorm'



export interface QuestoesRepository {
    find(): Promise<Questoes[]>
    findOneBy(id: number): Promise<Questoes | null>
    delete(id: number): Promise<void>
    save(createQuestoesDto: CreateQuestoesDto): Promise<Questoes>
    update(id: number, updateQuestoesDto: UpdateQuestoesDto): Promise<void>
}

@Injectable()
export class QuestoesRepositoryImplementation implements QuestoesRepository {
    constructor(
        private questoesRepository: Repository<Questoes>,
    ) {}

    async find(): Promise<Questoes[]> {
        return this.questoesRepository.find();
    }

    async findOneBy(id: number): Promise<Questoes | null> {
        return this.questoesRepository.findOneBy({ id });
    }

    async save(createQuestoesDto: CreateQuestoesDto): Promise<Questoes> {
        return await this.questoesRepository.save(createQuestoesDto);
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

    async delete(id: number): Promise<void> {
        const result = await this.questoesRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Questão com ID ${id} não encontrada`);
        }
    }
}