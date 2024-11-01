import mysql from 'mysql2/promise';

let con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB
})


console.log('--> DB conectado <--');

export default con;
