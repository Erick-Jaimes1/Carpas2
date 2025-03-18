import React, { useState } from 'react';
import './Galery.css';

const Galeria = () => {
  const [selectedFoto, setSelectedFoto] = useState<string | null>(null);

  const images = [
    ...Array.from({ length: 33 }, (_, i) => `/ImagesMesasCata/${i + 1}.jpg`),
    ...Array.from({ length: 15 }, (_, i) => `/ImagesSillasCata/${i + 1}.jpg`),
    ...Array.from({ length: 56 }, (_, i) => `/ImagesCarpasCata/${i + 1}.jpg`),
    ...Array.from({ length: 16 }, (_, i) => `./ImagesCristaleriaCata/${i + 1}.jpg`),
  ];

  const closeModal = () => {
    setSelectedFoto(null);
  };

  return (
    <section className="galeria">
      <h2>Galería de Imágenes</h2>
      <div className="galeria-contenedor">
        {images.map((image, index) => (
          <div key={index} className="foto-card">
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              onClick={() => setSelectedFoto(image)}
            />
          </div>
        ))}
      </div>

      {selectedFoto && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedFoto} alt="Imagen ampliada" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
