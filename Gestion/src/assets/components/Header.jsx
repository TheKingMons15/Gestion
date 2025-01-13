import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../styles/Header.css';

function Header({ onLoginClick }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Detectar el desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link 
            to="/campeonatos" 
            className={location.pathname === '/campeonatos' ? 'active' : ''}
          >
            Campeonatos
          </Link>
          <Link 
            to="/en-vivo" 
            className={location.pathname === '/en-vivo' ? 'active' : ''}
          >
            En Vivo
          </Link>
          <Link 
            to="/clasificacion" 
            className={location.pathname === '/clasificacion' ? 'active' : ''}
          >
            Clasificación
          </Link>
        </nav>

        <div className="login-container">
          <button className="login-button" onClick={onLoginClick}>Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
