import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../entities/base.entity';

@Entity()
export class Questoes extends BaseEntity {
  @Column()
  respondido: boolean;

  @Column()
  prioridade: boolean;
}