import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  fotoURL: string;

  @Column()
  descricao: string;
}