import { BaseEntity } from './base.entity'
import { CreateBaseEntityDto } from './dto/create-entity.dto'
import { UpdateBaseEntityDto } from './dto/update-entity.dto'

export interface EntityServiceInterface {
    findAll(): Promise<BaseEntity[]>
    findOne(id: string): Promise<BaseEntity | null>
    delete(id: string): Promise<void>
    create(createBaseEntityDto: CreateBaseEntityDto): Promise<BaseEntity>
    update(id: string, updateBaseEntityDto: UpdateBaseEntityDto): Promise<void>
    validateInput(createBaseEntityDto: any): boolean
}