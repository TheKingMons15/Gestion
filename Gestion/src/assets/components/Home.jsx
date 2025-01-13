import React from 'react';
import '../styles/Home.css';

function Home() {
 return (
   <section className="home">
     <div className="basketball-icons">
       <span className="basketball-icon">🏀</span>
       <span className="basketball-icon">🏀</span>
       <span className="basketball-icon">🏀</span>
       <span className="basketball-icon">🏀</span>
       <span className="tactic-icon">O</span>
       <span className="tactic-icon">→</span>
       <span className="tactic-icon">X</span>
       <span className="tactic-icon">←</span>
     </div>
     <h1>Bienvenido a la Liga de Baloncesto De Tulcán</h1>
     <p>Sigue los campeonatos y clasificaciones en tiempo real.</p>
     <h2>DESARROLLADO POR WLADIMIR ALMEIDA</h2>
   </section>
 );
}

export default Home;
