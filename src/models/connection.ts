import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'login_database',
});

export default connection;
