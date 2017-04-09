import mysql from 'mysql';
import { config } from 'dotenv';

config();

const {DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} = process.env;

let connection = mysql.createConnection({
    database: DB_NAME,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
});

connection.connect();

export default connection;