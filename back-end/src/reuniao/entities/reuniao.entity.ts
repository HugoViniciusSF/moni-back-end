import { Entity, Column, PrimaryColumn } from 'typeorm';

export interface ReuniaoInterface {
    id: string;
    nome: string;
    fotoURL: string;
    descricao: string;
    local: string;
    presenca: string;
    certificado: boolean;
}


export class Reuniao implements ReuniaoInterface{
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