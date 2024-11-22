import { Router } from 'express';
import { salvarclientes, consultarcliente } from '../repository/clientesrepository.js';

const endpoints = Router();

endpoints.post('/clientes', async (req, resp) => {
  try {
    const cliente = req.body;
    const id = await salvarclientes(cliente);

    resp.status(201).send({ id });

  } catch (err) {
    resp.status(500).send({
      error: 'Erro ao adicionar cliente',
      details: err.message
    });
  }
});


endpoints.get('/clientes/:nome', async (req, resp) => {
  try {
    const { nome } = req.params; 
    const clientes = await consultarcliente(nome);

    if (clientes.length === 0) {

      resp.status(404).send({ message: 'Nenhum cliente encontrado com esse nome' });

    } else {

      resp.status(200).send({cliente: clientes});

    }
  } catch (err) {

    resp.status(500).send({
      error: 'Erro ao consultar clientes',
      details: err.message

    });
  }
});

export default endpoints;