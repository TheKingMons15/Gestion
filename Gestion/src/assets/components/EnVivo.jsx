import React from 'react';
import '../styles/EnVivo.css';
import equipo1Logo from '../../assets/logo.svg';
import equipo2Logo from '../../assets/logo.svg';

// Jugadores con número de camiseta, faltas y puntos
const jugadores = Array.from({ length: 12 }, (_, i) => ({
  numero: Math.floor(Math.random() * 30) + 1,
  nombre: `Jugador ${i + 1}`,
  faltas: Math.floor(Math.random() * 5),
  puntos: Math.floor(Math.random() * 20)
}));

function EnVivo({ onClose }) {
    return (
      <section className="envivo">
    {/* Equipo 1 */}
      <div className="equipo equipo1">
        <h2>Equipo 1</h2>
        <div className="jugador-header">
          <span>#</span>
          <span>Nombre</span>
          <span>Faltas</span>
          <span>Puntos</span>
        </div>
        {jugadores.map((jugador, index) => (
          <div key={index} className="jugador">
            <div className="numero-camiseta">#{jugador.numero}</div>
            <span>{jugador.nombre}</span>
            <div className="faltas">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`falta-box ${i < jugador.faltas ? 'llena' : ''}`}></div>
              ))}
            </div>
            <div className="puntos">{jugador.puntos}</div>
          </div>
        ))}

        <div className="entrenadores">
          <p><strong>Entrenador</strong></p>
          <p>Asistente</p>
        </div>
      </div>

      {/* Sección central (Marcador y Período) */}
      <div className="centro">
        <div className="tiempo-juego">
          <h1>08:42</h1>
        </div>

        <div className="marcador">
          <div className="marcador-item">
            <img src={equipo1Logo} alt="Equipo 1" />
            <div className="marcador-numero">65</div>
            <p>Local</p>
          </div>
          <div className="vs">VS</div>
          <div className="marcador-item">
            <img src={equipo2Logo} alt="Equipo 2" />
            <div className="marcador-numero">72</div>
            <p>Visitante</p>
          </div>
        </div>

        <div className="faltas-timeout">
          <div className="equipo-info">
            <h4>Faltas Colectivas</h4>
            <div className="faltas-bar">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`falta-box ${i < 3 ? 'llena' : ''}`}></div>
              ))}
            </div>
            <h4>Timeouts</h4>
            <div className="timeout-bar">
              {'XXXX'.split('').map((x, i) => (
                <span key={i} className={i < 2 ? 'disponible' : 'usado'}>{x}</span>
              ))}
            </div>
          </div>

          <div className="equipo-info">
            <h4>Faltas Colectivas</h4>
            <div className="faltas-bar">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`falta-box ${i < 4 ? 'llena' : ''}`}></div>
              ))}
            </div>
            <h4>Timeouts</h4>
            <div className="timeout-bar">
              {'XXXX'.split('').map((x, i) => (
                <span key={i} className={i < 1 ? 'disponible' : 'usado'}>{x}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="periodos">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={`periodo-box ${num === 1 ? 'activo' : ''}`}>{num}</div>
          ))}
        </div>

        <div className="arbitros-mesa">
          <div className="arbitros">
            <h4>Árbitros</h4>
            <ul>
              <li>Árbitro 1</li>
              <li>Árbitro 2</li>
              <li>Árbitro 3</li>
            </ul>
          </div>
          <div className="mesa-control">
            <h4>Mesa de Control</h4>
            <ul>
              <li>Oficial 1</li>
              <li>Oficial 2</li>
              <li>Oficial 3</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Equipo 2 */}
      <div className="equipo equipo2">
        <h2>Equipo 2</h2>
        <div className="jugador-header">
          <span>#</span>
          <span>Nombre</span>
          <span>Faltas</span>
          <span>Puntos</span>
        </div>
        {jugadores.map((jugador, index) => (
          <div key={index} className="jugador">
            <div className="numero-camiseta">#{jugador.numero}</div>
            <span>{jugador.nombre}</span>
            <div className="faltas">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`falta-box ${i < jugador.faltas ? 'llena' : ''}`}></div>
              ))}
            </div>
            <div className="puntos">{jugador.puntos}</div>
          </div>
        ))}
        <div className="entrenadores">
          <p><strong>Entrenador</strong></p>
          <p>Asistente</p>
        </div>
      </div>
    </section>
  );
}

export default EnVivo;