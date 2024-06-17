import { Entity, Column, PrimaryColumn } from 'typeorm';

export interface JogosInterface {
    id: string;
    nome: string;
    fotoURL: string;
    descricao: string;
    genero: string;
    plataforma: string;
}
@Entity()
export class Jogos implements JogosInterface{
    
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;
    
    @Column()
    fotoURL: string;

    @Column()
    descricao: string;

    @Column()
    genero: string;
    
    @Column()
    plataforma: string;
}
