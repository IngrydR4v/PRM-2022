import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, UpdateDateColumn } from "typeorm";
import { Brand } from "./Brand";
import { Category } from "./Category";

@Entity()
export class Product {

    id: number;

    @Column({nullable: false, length: 50})
    name: string;

    @Column('text', {nullable: true})
    description: string;

    @Column({nullable: false})
    price: number;

    @Column({nullable: false, length:1})
    active: string;

    @ManyToOne(() => Category, {eager: true, nullable:false})
    category: Category;

    @ManyToOne(() => Brand, {eager: true, nullable:true})
    brand: Brand;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}