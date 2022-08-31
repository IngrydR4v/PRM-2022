import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';

// Instaciando uma aplicação express
const app = express();

// Determina a porta de execução
const PORT = 3300;

// Middleware
app.use(cors());
app.use(express.json());

// Tentando conectar ao banco e se não conseguir, mostrar o erro
AppDataSource.initialize()
    .then( () => {

        // Inicio a aplicação
        app.listen(PORT, () => {
            console.log(`Running in port ${PORT}`);
        })
    }).catch(error => {
        console.log('Ops! Ocorreu um erro.');
        console.error(error);
    })