import React, { useState } from 'react';
import '../styles/LoginModal.css';

function LoginModal({ onClose, onLoginSubmit }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(usuario, password);  // Llama a la función de login del App
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Usuario" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="modal-login-btn">Entrar</button>
        </form>
        <button className="modal-close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default LoginModal;
