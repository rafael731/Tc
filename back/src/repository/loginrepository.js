import con from "./connection.js";

export async function salvarlogin(login){
    let comando = `
        INSERT INTO tb_login(user_nome, user_email, user_senha)
        VALUES(?, ?, ?)
    `
    let resposta = await con.query(comando, [login.nome, login.email, login.senha]);
    let info = resposta[0];

    let idlogin = info.insertId;
    return idlogin; 

}

export async function consultarlogin(user_email, user_senha){
    let comando = `
            SELECT user_id          id,
                   user_nome        nome,
                   user_email       email,
                   user_senha       senha
            FROM tb_login
            WHERE user_email = ? and
            user_senha = ?;
    `
    
    let resposta = await con.query(comando, [user_email, user_senha]);
    let registros = resposta[0];

    return registros;
}