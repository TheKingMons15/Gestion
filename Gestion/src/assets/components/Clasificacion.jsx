import React, { useState } from 'react';
import '../styles/Clasificacion.css';
import jugador1 from '../../assets/jugador.png';
import jugador2 from '../../assets/jugador.png';
import jugador3 from '../../assets/jugador.png';

// Datos de ejemplo
const campeonatos = ['Campeonato 1', 'Campeonato 2', 'Campeonato 3', 'Campeonato 4'];
const equipos = [
    { nombre: 'Equipo 1', puntos: 45, jugados: 20, victorias: 18, derrotas: 2, ppp: 89 },
    { nombre: 'Equipo 2', puntos: 42, jugados: 20, victorias: 17, derrotas: 3, ppp: 85 },
    { nombre: 'Equipo 3', puntos: 38, jugados: 20, victorias: 15, derrotas: 5, ppp: 80 },
    { nombre: 'Equipo 4', puntos: 35, jugados: 20, victorias: 14, derrotas: 6, ppp: 76 }
];

const mejoresEncestadores = [
    { jugador: 'Juan Pérez', equipo: 'Equipo 1', puntos: 400, ppp: 26.1, tiempo: '34,3', foto: jugador1 },
    { jugador: 'Luis Gómez', equipo: 'Equipo 2', puntos: 350, ppp: 23.6, tiempo: '28,4', foto: jugador2 },
    { jugador: 'Carlos Díaz', equipo: 'Equipo 3', puntos: 300, ppp: 20.3, tiempo: '25,2', foto: jugador3 }
];

const mejoresTripleros = [
    { jugador: 'David Mora', equipo: 'Equipo 1', triples: 50, tpp: 3.3, tiempo: '30,3', foto: jugador1 },
    { jugador: 'Andrés Ríos', equipo: 'Equipo 2', triples: 45, tpp: 3.1, tiempo: '28,1', foto: jugador2 },
    { jugador: 'Pedro López', equipo: 'Equipo 3', triples: 40, tpp: 2.9, tiempo: '26,7', foto: jugador3 }
];

function Clasificacion({ onClose }) {
    const [campeonatoSeleccionado, setCampeonatoSeleccionado] = useState(campeonatos[0]);
    const [categoria, setCategoria] = useState('Masculino');
    const [fotoAmpliada, setFotoAmpliada] = useState(null);

    const handleCampeonatoClick = (campeonato) => {
        setCampeonatoSeleccionado(campeonato);
    };

    const ampliarFoto = (foto) => {
        setFotoAmpliada(foto);
    };

    const cerrarFoto = () => {
        setFotoAmpliada(null);
    };

    return (
        <section className="clasificacion">
            <button className="close-button-clasificacion" onClick={onClose}>×</button>

            <div className="campeonatos-container">
                {campeonatos.map((campeonato) => (
                    <button 
                        key={campeonato} 
                        className={`campeonato-btn ${campeonato === campeonatoSeleccionado ? 'activo' : ''}`} 
                        onClick={() => handleCampeonatoClick(campeonato)}
                    >
                        {campeonato}
                    </button>
                ))}
            </div>

            <div className="contenido">
                <h2>Clasificación - {campeonatoSeleccionado}</h2>

                <div className="tabla-equipos">
                    <div className="tabla-header">
                        <span>Equipo</span>
                        <span>Pts</span>
                        <span>PJ</span>
                        <span>Victorias</span>
                        <span>Derrotas</span>
                        <span>PPP</span>
                    </div>
                    <div className="tabla-scroll">
                        {equipos.map((equipo, index) => (
                            <div key={index} className="equipo-item">
                                <span>{equipo.nombre}</span>
                                <span>{equipo.puntos}</span>
                                <span>{equipo.jugados}</span>
                                <span>{equipo.victorias}</span>
                                <span>{equipo.derrotas}</span>
                                <span>{equipo.ppp}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mejores-jugadores">
                    <div className="encestadores">
                        <h3>Mejor Encestador</h3>
                        <div className="jugador-header">
                            <span></span>
                            <span>Jugador</span>
                            <span></span>
                            <span>Pts</span>
                            <span>PPP</span>
                            <span>Min</span>
                        </div>
                        {mejoresEncestadores.map((jugador, index) => (
                            <div key={index} className="jugador-item">
                                <div className="jugador-foto-container">
                                    <img 
                                        src={jugador.foto} 
                                        alt={jugador.jugador} 
                                        className="jugador-foto-mini"
                                        onClick={() => ampliarFoto(jugador.foto)}
                                    />
                                </div>
                                <span>{jugador.jugador}</span>
                                <span>{jugador.equipo}</span>
                                <span>{jugador.puntos}</span>
                                <span>{jugador.ppp}</span>
                                <span>{jugador.tiempo} Min</span>
                            </div>
                        ))}
                    </div>

                    <div className="tripleros">
                        <h3>Mejor Triplero</h3>
                        <div className="jugador-header">
                            <span></span>
                            <span>Jugador</span>
                            <span></span>
                            <span>3Pts</span>
                            <span>TPP</span>
                            <span>Min</span>
                        </div>
                        {mejoresTripleros.map((jugador, index) => (
                            <div key={index} className="jugador-item">
                                <div className="jugador-foto-container">
                                    <img 
                                        src={jugador.foto} 
                                        alt={jugador.jugador} 
                                        className="jugador-foto-mini"
                                        onClick={() => ampliarFoto(jugador.foto)}
                                    />
                                </div>
                                <span>{jugador.jugador}</span>
                                <span>{jugador.equipo}</span>
                                <span>{jugador.triples}</span>
                                <span>{jugador.tpp}</span>
                                <span>{jugador.tiempo} Min</span>
                            </div>
                        ))}
                    </div>
                </div>

                {fotoAmpliada && (
                    <div className="foto-modal" onClick={cerrarFoto}>
                        <img src={fotoAmpliada} alt="Jugador" className="foto-grande" />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Clasificacion;
