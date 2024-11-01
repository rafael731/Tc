import { dentalclinic } from '../repository/loginrepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/login', (req, resp) =>{
    let loginobj = req.body;

})

export default endpoints