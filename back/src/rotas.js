import logincontroller from './controller/logincontroller.js'
import clientescontroller from './controller/clientescontroller.js'

export default function adicionarRotas(servidor){
    servidor.use(logincontroller);
    servidor.use(clientescontroller);
}