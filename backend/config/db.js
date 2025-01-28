// backend/config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// Configuración del pool de conexiones
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10, // Número máximo de conexiones en el pool
  queueLimit: 0,
});

// Verificar la conexión al iniciar
pool.getConnection()
  .then((conn) => {
    console.log('✅ Conectado a MySQL');
    conn.release();
  })
  .catch((err) => {
    console.error('❌ Error de conexión a MySQL:', err.message);
  });

module.exports = pool;