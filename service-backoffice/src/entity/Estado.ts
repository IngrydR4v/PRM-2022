import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Estado extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: true})
    nome: string;

    @Column({nullable: true})
    sigla: string;
}
