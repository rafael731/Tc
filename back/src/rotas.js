import logincontroller from './controller/logincontroller.js'



export default function adicionarRotas(servidor){
    servidor.use(logincontroller);
}