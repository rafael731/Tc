import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';

import logincontroller from './controller/logincontroller.js'

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

servidor.use(logincontroller);

adicionarRotas(servidor);

 
const PORTA = process.env.PORTA;

servidor.listen(
   PORTA,
   () => console.log(`porta ${PORTA} `));