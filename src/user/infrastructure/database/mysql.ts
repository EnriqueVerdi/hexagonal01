require('dotenv').config();
const mysql2 = require('mysql2');	
const {promisify} = require('util');

let connection = 
mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

connection.getConnection((err: { code: string; }, connection: { release: () => void; }) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if(connection){ 
        connection.release();
        console.log('DB is Connected');
    }
});

connection.query = promisify(connection.query);

module.exports = connection;