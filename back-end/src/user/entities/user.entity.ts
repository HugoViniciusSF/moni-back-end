import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
    CLIENT = 'client',
    CHEFE = 'chefe',
    MONITOR = 'monitor',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;
}