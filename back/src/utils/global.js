import { horaAtual } from "./datetime.js";


global.criarError = function criarError(err){
    
}


global.logError = function logError(err){
    console.log(horaAtual() + 'Error >' + err.message);
}