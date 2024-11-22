import './utils/global.js';

import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';



const servidor = express();
servidor.use(express.json());
servidor.use(cors());


//configurar os controllers
adicionarRotas(servidor);

 
const PORTA = process.env.PORTA;

servidor.listen(
   PORTA,
   () => console.log(`porta ${PORTA} `));