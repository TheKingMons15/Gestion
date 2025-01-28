// backend/server.js
import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/test', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS current_time');
    res.json({ time: rows[0].current_time });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});