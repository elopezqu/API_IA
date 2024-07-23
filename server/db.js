// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Cambia esto a tu usuario de MySQL
  password: '1234',  // Cambia esto a tu contraseña de MySQL
  database: 'parking'  // Cambia esto a tu base de datos de MySQL
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
