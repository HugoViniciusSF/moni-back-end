import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../entities/base.entity';

@Entity()
export class Reuniao extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    fotoURL: string;

    @Column()
    descricao: string;

    @Column()
    local: string;

    @Column()
    presenca: string;

    @Column({ default: false })
    certificado: boolean;
}