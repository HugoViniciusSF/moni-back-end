import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../entities/base.entity';

@Entity()
export class Jogos extends BaseEntity {
  @Column()
  genero: string;

  @Column()
  plataforma: string;
}