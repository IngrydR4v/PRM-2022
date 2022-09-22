import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Estado } from "./estado";

@Entity()
export class Cidade extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: true})
    nome: string;

    @ManyToOne(() => Estado, {eager: true, nullable: false})
    estado: Estado;
}
