import con from "./connection.js";

export async function salvarclientes(cliente){
    let comando = `
    INSERT INTO tb_clientes(nome_cliente, cpf_cliente, telefone, email)
		VALUES (?, ?, ?, ?);
    `
    let resposta = await con.query(comando, [cliente.cliente, cliente.cpf, cliente.telefone, cliente.email]);
    let info = resposta[0];

    let idclientes = info.insertId;
    return idclientes; 

}


export async function consultarcliente(cliente){
    let comando = `
        SELECT id_cliente       id,
		        nome_cliente    nome,
                cpf_cliente     cpf,
		        telefone        telefone,
		        email           email
        FROM tb_clientes
        WHERE  nome_cliente like ?;
    `
    
    let resposta = await con.query(comando, [cliente]);
    let registros = resposta[0];

    return registros;
}