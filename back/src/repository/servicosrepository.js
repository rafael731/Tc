

export async function salvarservicos(servicos) {
    let comando = `
        INSERT INTO servicos(servico_data, valor)
		VALUES (?, ?);
    `
    let resposta = await con.query(comando, [servicos.data, servicos.valor]);
    let info = resposta[0];

    let idservico = info.insertId;
    return idservico;

}


export async function consultarservicos(serv) {
    let comando = `
            SELECT servico_id           id ,
	               servico_data         data,
                   valor                valor
            FROM servicos;
            WHERE servico_data like ?

    `

    let resposta = await con.query(comando, [idserv]);
    let registros = resposta[0];

    return registros;
}