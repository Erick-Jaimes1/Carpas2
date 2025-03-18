import React from 'react';
import './Styles/Inicio.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="./Images/Portada Car.jpeg" alt="Hero" />
      <div className="hero-text">
        <h1>Inmuebles a la medida</h1>
        <p>Encuentra el mejor lugar para ti</p>
      </div>
    </section>
  );
};

export default HeroSection;
