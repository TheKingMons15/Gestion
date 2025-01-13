import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import Campeonatos from './assets/components/Campeonatos';
import Clasificacion from './assets/components/Clasificacion';
import EnVivo from './assets/components/EnVivo';
import LoginModal from './assets/components/LoginModal';
import DashboardEntrenador from './assets/components/DashboardEntrenador';
import DashboardAdmin from './assets/components/DashboardAdmin';
import './App.css';

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const handleLoginSubmit = (usuario, password) => {
        if (usuario === 'entrenador' && password === '123') {
            navigate('/dashboard-entrenador');
            setShowLogin(false);
        } else if (usuario === 'admin' && password === 'admin') {
            navigate('/dashboard-admin');
            setShowLogin(false);
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <div className="App">
            {/* Mostrar Header solo si no está en el dashboard */}
            {!window.location.pathname.includes('dashboard') && (
                <Header onLoginClick={handleLoginClick} />
            )}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/campeonatos" element={<Campeonatos />} />
                <Route path="/clasificacion" element={<Clasificacion />} />
                <Route path="/en-vivo" element={<EnVivo />} />
                <Route path="/dashboard-entrenador" element={<DashboardEntrenador />} />
                <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            </Routes>

            {showLogin && (
                <LoginModal onClose={handleCloseLogin} onLoginSubmit={handleLoginSubmit} />
            )}
        </div>
    );
}

export default App;
