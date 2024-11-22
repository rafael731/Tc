import './connection.js';

export async function salvarfuncionarios(funcionario){
    let comando = `
       INSERT INTO tb_funcionarios(nome_funcionarios, funcionalidade, data_contrato, presente, telefone, salario)
		VALUES (?, ?, ?, ?, ?, ?);
    `
    let resposta = await con.query(comando, [funcionario.funcionarios, funcionario.funcionalidade, funcionario.contrato, funcionario.pesente, funcionario.telefone, funcionario.salario]);
    let info = resposta[0];

    let idfuncionario = info.insertId;
    return idfuncionario; 

}


export async function consultarfuncionario(funci){
    let comando = `
           SELECT id_funcionario       funcionario,
                  nome_funcionario      funcionario,
                  funcionalidade        funcionalidade,
                  data_contrato         contrato,
                  presente              presente,
                  telefone              telefone,
                  salario               salario
            FROM tb_funcionarios;
            WHERE nome_funcionario like ?
    `
    
    let resposta = await con.query(comando, [idfunci]);
    let registros = resposta[0];

    return registros;
}