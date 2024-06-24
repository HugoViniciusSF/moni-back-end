import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../entities/base.entity';

@Entity()
export class Reuniao extends BaseEntity {
    @Column()
    local: string;

    @Column()
    presenca: string;

    @Column({ default: false })
    certificado: boolean;
}