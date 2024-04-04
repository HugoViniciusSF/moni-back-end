import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questoes {
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
