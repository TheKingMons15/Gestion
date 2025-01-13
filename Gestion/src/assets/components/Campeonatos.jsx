import React from 'react';
import '../styles/Campeonatos.css';
import campeonato1 from '../../assets/logo.svg';
import campeonato2 from '../../assets/logo.svg';

const campeonatosData = [
    { nombre: 'CAMPEONATO 1', logo: campeonato1, descripcion: 'Torneo local', lugar: 'Quito' },
    { nombre: 'CAMPEONATO 2', logo: campeonato2, descripcion: 'Liga nacional', lugar: 'Guayaquil' },
    { nombre: 'CAMPEONATO 3', logo: campeonato1, descripcion: 'Torneo universitario', lugar: 'Cuenca' },
    { nombre: 'CAMPEONATO 4', logo: campeonato2, descripcion: 'Liga escolar', lugar: 'Ambato' }
];

function Campeonatos({ onNavigate }) {
    const handleCardClick = (campeonato) => {
        onNavigate('clasificacion', campeonato);
    };

    return (
        <section className="campeonatos">
            <h2 className="campeonatos-header">Campeonatos Disponibles</h2>
            <div className="campeonatos-row">
                {campeonatosData.map((campeonato, index) => (
                    <div
                        key={index}
                        className="campeonato-item"
                        onClick={() => handleCardClick(campeonato.nombre)}
                    >
                        <h3>{campeonato.nombre}</h3>
                        <img 
                            src={campeonato.logo} 
                            alt={campeonato.nombre}
                            draggable="false"
                        />
                        <p>{campeonato.descripcion}</p>
                        <span>{campeonato.lugar}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Campeonatos;
