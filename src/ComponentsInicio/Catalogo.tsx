import React, { useState } from "react";
import './Styles/Inicio.css';

const Catalog: React.FC = () => {
  const categories = [
    {
      name: "Mesas",
      thumbnail: "./ImagesMesasCata/1.jpg",
      images: Array.from({ length: 32 }, (_, i) => `/ImagesMesasCata/${i + 1}.jpg`),
    },
    {
      name: "Sillas",
      thumbnail: "./ImagesSillasCata/15.jpg",
      images: Array.from({ length: 15 }, (_, i) => `/ImagesSillasCata/${i + 1}.jpg`),
    },
    {
      name: "Carpas",
      thumbnail: "./ImagesCarpasCata/1.jpg",
      images: Array.from({ length: 56 }, (_, i) => `/ImagesCarpasCata/${i + 1}.jpg`),
    },
    {
      name: "Loza y Cristalería",
      thumbnail: "./ImagesCristaleriaCata/PortadaCopa.jpg",
      images: Array.from({ length: 16 }, (_, i) => `./ImagesCristaleriaCata/${i + 1}.jpg`),
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    images: string[];
  } | null>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const openCategory = (category: { name: string; images: string[] }) => {
    setSelectedCategory(category);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedCategory.images.length);
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + selectedCategory.images.length) % selectedCategory.images.length
      );
    }
  };

  return (
    <div className="catalog">
      <h1>Catálogo</h1>

      {/* Vista inicial con las categorías */}
      {!selectedCategory && (
        <div className="grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category"
              onClick={() => openCategory(category)}
            >
              <img src={category.thumbnail} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Vista de galería de la categoría seleccionada */}
      {selectedCategory && (
        <div className="gallery">
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            Regresar
          </button>
          <h2>{selectedCategory.name}</h2>
          <div className="image-grid">
            {selectedCategory.images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={image} alt={`${selectedCategory.name} ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            Regresar
          </button>
        </div>
      )}

      {/* Ventana flotante (Lightbox) */}
      {isLightboxOpen && selectedCategory && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>×</button>
          <button className="prev-btn" onClick={prevImage}>&#8249;</button>
          <img
            src={selectedCategory.images[currentImageIndex]}
            alt={`${selectedCategory.name} ${currentImageIndex + 1}`}
          />
          <button className="next-btn" onClick={nextImage}>&#8250;</button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
