import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Category } from "./entity/Category";
import { Product } from "./entity/Product";
import { Brand } from  './entity/Brand';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'prmdb',
    synchronize: true,
    logging: true,
    entities: [Brand, Category, Product]
});