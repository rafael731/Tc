import { salvarlogin, consultarLogin } from '../repository/loginrepository.js';
import { Router } from 'express';
const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
  try {
    const { user_nome, user_email, user_senha } = req.body;

    const usuarioExistente = await consultarLogin(user_email);
    if (usuarioExistente.length > 0) {
      return resp.status(400).json({ message: 'E-mail já cadastrado!' });
    }

    const id = await salvarlogin({ nome: user_nome, email: user_email, senha: user_senha });

    resp.status(201).json({ id, message: 'Usuário criado com sucesso!' });
  } catch (err) {
    console.error(err);
    resp.status(500).json({ error: 'Erro ao criar login', details: err.message });
  }
});

endpoints.post('/login/auth', async (req, resp) => {
  try {
    const { user_email, user_senha } = req.body;


    const usuario = await consultarLogin(user_email, user_senha);

    if (usuario.length > 0) {

      resp.status(200).json({ message: 'Autenticado com sucesso!' });

    } else {

      resp.status(401).json({ message: 'Usuário ou senha incorretos.' });

    }
  } catch (err) {

    console.error(err);

    resp.status(500).json({ error: 'Erro ao autenticar login', details: err.message });

  }
});

export default endpoints;
