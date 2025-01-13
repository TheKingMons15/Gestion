import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DashboardAdmin.css';
import logoEquipo from '../../assets/logo.svg';
import { Moon, Sun, BarChart, Users, FileText, Calendar, Inbox } from 'lucide-react';

function DashboardAdmin() {
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
        <div className={`dashboard-admin ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <aside className="sidebar">
                <div className="sidebar-top">
                    <div className="logo-container">
                        <img src={logoEquipo} alt="Logo de la Liga" className="logo-equipo" />
                    </div>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </div>
                <nav>
                    <a href="#" className="active"><BarChart size={20} /> Inicio</a>
                    <a href="#"><Users size={20} /> Gestión de Equipos</a>
                    <a href="#"><FileText size={20} /> Reportes</a>
                    <a href="#"><Calendar size={20} /> Agenda</a>
                    <a href="#"><Inbox size={20} /> Mensajes</a>
                </nav>
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </aside>

            <main className="main-content">
                <header className="dashboard-header">
                    <h1>Resumen General</h1>
                    <div className="actions">
                        <input type="text" placeholder="Buscar en reportes..." />
                    </div>
                </header>

                <section className="resumen-general">
                    <div className="widget torneos-activos">
                        <h3>Torneos Activos</h3>
                        <p>5 Torneos</p>
                    </div>

                    <div className="widget equipos-registrados">
                        <h3>Equipos Registrados</h3>
                        <p>32 Equipos</p>
                    </div>

                    <div className="widget proximos-partidos">
                        <h3>Próximos Partidos</h3>
                        <ul>
                            <li>Final Liga A - 25/01/2025</li>
                            <li>Semifinal Liga B - 20/01/2025</li>
                        </ul>
                    </div>
                </section>

                <section className="gestion-equipo">
                    <h2>Estado de Equipos</h2>
                    <div className="jugadores">
                        <div className="jugador-item">
                            <img src="https://via.placeholder.com/60" alt="Equipo" />
                            <span>Equipo Rojo</span>
                            <span>12 Jugadores</span>
                        </div>
                        <div className="jugador-item">
                            <img src="https://via.placeholder.com/60" alt="Equipo" />
                            <span>Equipo Azul</span>
                            <span>15 Jugadores</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DashboardAdmin;
