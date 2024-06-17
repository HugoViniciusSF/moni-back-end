import { Entity, Column, PrimaryColumn } from 'typeorm';

export interface ReunioesInterface {
    id: string;
    nome: string;
    fotoURL: string;
    descricao: string;
    local: string;
    presenca: string;
    certificado: boolean;
}


export class Reunioes implements ReunioesInterface{
    @PrimaryColumn()
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

