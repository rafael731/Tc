import con from "./connection.js";

export async function salvarlogin(login){
    let comando = `
        INSERT INTO tb_login(user_name, user_email, user_senha)
        VALUES(?, ?, ?)
    `
    let resposta = await con.query(comando, [login.nome, login.email, login.senha]);
    let info = resposta[0];

    let idlogin = info.insertId;
    return idlogin; 

}

export async function consultarlogin(nome){
    let comando = `
            SELECT user_id          id,
                   user_nome        nome,
                   user_email       email,
                   user_senha       senha
            FROM tb_login;
            WHERE user_nome like ?
    `
    
    let resposta = await con.query(comando, [idnome]);
    let registros = resposta[0];

    return registros;
}