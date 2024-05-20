import { Entity, Column, PrimaryColumn } from 'typeorm';

export interface QuestoesInterface {
    id: string;
    nome: string;
    fotoURL: string;
    descricao: string;
    respondido: boolean;
    prioridade: boolean;
}

@Entity()
export class Questoes implements QuestoesInterface{
  
    @PrimaryColumn()
    id: string;

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
