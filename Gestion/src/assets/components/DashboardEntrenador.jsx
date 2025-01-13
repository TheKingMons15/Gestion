import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DashboardEntrenador.css';
import logoEquipo from '../../assets/logo.svg';
import { Moon, Sun } from 'lucide-react';

function DashboardEntrenador() {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleLogout = () => {
        navigate('/');
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-theme');
    };

    return (
        <div className={`dashboard-entrenador ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <aside className="sidebar">
                <div className="sidebar-top">
                    <div className="logo-container">
                        <img src={logoEquipo} alt="Logo del Equipo" className="logo-equipo" />
                    </div>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </div>
                <nav>
                    <a href="#" className="active">Inicio</a>
                    <a href="#">Gestión de Equipo</a>
                    <a href="#">Análisis de Partidos</a>
                    <a href="#">Agenda y Calendario</a>
                    <a href="#">Evaluación de Jugadores</a>
                    <a href="#">Estadísticas en Vivo</a>
                    <a href="#">Reportes</a>
                    <a href="#">Mensajes</a>
                </nav>
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </aside>

            <main className="main-content">
                <header className="dashboard-header">
                    <h1>Resumen General</h1>
                    <div className="actions">
                        <input type="text" placeholder="Buscar..." />
                    </div>
                </header>

                {/* Sección de Resumen General */}
                <section className="resumen-general">
                    <div className="widget partidos-proximos">
                        <h3>Próximos Partidos</h3>
                        <ul>
                            <li>Equipo A vs Equipo B - 15/01/2025</li>
                            <li>Equipo C vs Equipo D - 20/01/2025</li>
                        </ul>
                    </div>

                    <div className="widget estado-fisico">
                        <h3>Estado Físico de Jugadores</h3>
                        <p>3 jugadores en recuperación</p>
                        <p>12 jugadores en forma</p>
                    </div>

                    <div className="widget resultados">
                        <h3>Últimos Resultados</h3>
                        <p>Equipo A 85 - 79 Equipo B</p>
                        <p>Equipo C 92 - 88 Equipo D</p>
                    </div>
                </section>

                {/* Gestión de Equipo */}
                <section className="gestion-equipo">
                    <div className="jugadores">
                        <div className="jugador-item">
                            <img src="https://via.placeholder.com/60" alt="Jugador" />
                            <span>Juan Pérez</span>
                            <span>Base</span>
                            <span>400 Puntos</span>
                        </div>
                        <div className="jugador-item">
                            <img src="https://via.placeholder.com/60" alt="Jugador" />
                            <span>Andrés López</span>
                            <span>Alero</span>
                            <span>380 Puntos</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DashboardEntrenador;