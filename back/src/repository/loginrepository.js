import con from './connection.js'


export async function dentalclinic(login){
    let comando = `
        INSERT INTO tb_login (nome_user, senha)
			VALUES(?, ?);
    `
    let resposta = await con.query(comando, [login.nome, login.senha]);
    let info = resposta[0];

    let idlogin = info.insertId;
    return idlogin; 

}
