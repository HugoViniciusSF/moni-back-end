import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface QuestoesInterface {
    id: number;
    nome: string;
    fotoURL: string;
    descricao: string;
    respondido: boolean;
    prioridade: boolean;
}

@Entity()
export class Questoes implements QuestoesInterface{
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
  
    @Column()
    fotoURL: string;

    @Column()
    descricao: string;

    @Column({ default: false })
    respondido: boolean;

    @Column({ default: false })
    prioridade: boolean;
}
