import React from 'react';
import './Styles/Inicio.css'

const PreguntaSection = () => {
  return (
    <section className="pregunta-seccion">
      <div className="pregunta-contenedor">
        <h2 className="pregunta">¿Quiénes somos?</h2>
        <p className="respuesta">
          En Carpas Up & Down, somos expertos en hacer de tu evento algo inolvidable.
          Nuestro objetivo es ofrecer soluciones personalizadas y confiables para tu evento.
          Contamos con una amplia variedad de carpas y mobiliario para bodas, fiestas y eventos corporativos. Haz que tu evento sea un éxito!

        </p>
      </div>
      <div className="imagen-contenedor">
        <img src="./Images/mesa.bmp" alt="Imagen de inmuebles" />
      </div>
    </section>
  );
};

export default PreguntaSection;
