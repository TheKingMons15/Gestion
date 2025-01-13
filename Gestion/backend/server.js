const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/baloncesto', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PartidoSchema = new mongoose.Schema({
    equipoLocal: String,
    equipoVisitante: String,
    puntosLocal: Number,
    puntosVisitante: Number,
    estado: String
});

const Partido = mongoose.model('Partido', PartidoSchema);

io.on('connection', (socket) => {
    console.log('usuario conectado');

    socket.on('actualizarPartido', async (data) => {
        const partido = await Partido.findById(data.id);
        partido.puntosLocal = data.puntosLocal;
        partido.puntosVisitante = data.puntosVisitante;
        await partido.save();
        io.emit('actualizacionPartido', partido);
    });
});

server.listen(5000, () => {
    console.log('servidor corriendo en http://localhost:5000');
});
