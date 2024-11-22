

export async function salvarclientes(cliente){
    let comando = `
    INSERT INTO tb_clientes(nome_cliente, cpf_cliente, telefone, email, pedido, data_pedido, valor_acordo)
		VALUES (?, ?, ?, ?, ?, ?, ?);
    `
    let resposta = await con.query(comando, [cliente.cliente, cliente.cpf, cliente.telefone, cliente.email, cliente.pedido, cliente.datapedido, cliente.valoracordo]);
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
		        email           email,
		        pedido          pedido,
		        data_pedido     datapedido,
		        valor_acordo    valor
        FROM tb_clientes;
        WHERE  nome_cliente like ?
    `
    
    let resposta = await con.query(comando, [idcliente]);
    let registros = resposta[0];

    return registros;
}