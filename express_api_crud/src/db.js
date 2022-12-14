const mysql = require('mysql2/promise');

async function conectDB () {
    const conecction = await mysql.createConnection({
        host: 'us-east.connect.psdb.cloud',
        user: 'rpoqm1aruurx2vmx2952',
        password: 'pscale_pw_y4gVr1TbDCPHcngqrzfUpitfqV4qZ3kqj6HmaVwnVmf',
        database: 'expressmysql',
        ssl: {
            rejectUnauthorized: false
        }
    })
    
    // usamos conection con query y le decimos a la base de datos que sume 1 + 1 y retorne el resultado
    // toda operacion con la base de datos es await
    const resutl = await conecction.query('SELECT 1 + 1 AS Result'); // <-- consultas de mysql lo que esta dentro de los parentesis

    console.log(resutl);
}

module.exports = conectDB;