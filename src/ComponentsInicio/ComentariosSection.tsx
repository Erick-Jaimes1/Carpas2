import React from 'react';
import './Styles/Inicio.css'

const ComentariosSection = () => {
  return (
    <section className="comentarios">
      <h2>¿Qué dicen nuestros clientes?</h2>
      <div className="comentarios-contenedor">
        <div className="comentario">
          <img src="./Images/foto.jpg" alt="Usuario 1" />
          <div className="info-comentario">
            <p>⭐⭐⭐⭐</p>
            <p>"Excelente servicio y atención. Volveré sin duda alguna. ¡Muy recomendado!" – María López</p>
          </div>
        </div>
        {/* Add more comentarios here */}
      </div>
    </section>
  );
};

export default ComentariosSection;