import React from 'react';
import './Styles/Inicio.css'

const Paquetes = () => {
  const packages = [
    {
      id: 1,
      name: "Paquete 1",
      description: "100 personas: Mesa Tifani, Silla Tifani, Cristalería a gusto",
    },
    {
      id: 2,
      name: "Paquete 2",
      description: "150 personas: Mesa Redonda, Silla Plegable, Vajilla Clásica",
    },
    {
      id: 3,
      name: "Paquete 3",
      description: "200 personas: Mesa Imperial, Silla Tiffany, Cristalería Premium",
    },
    {
      id: 4,
      name: "Paquete 4",
      description: "50 personas: Mesa de Madera, Silla Vintage, Mantelería Elegante",
    },
    {
      id: 5,
      name: "Paquete 5",
      description: "300 personas: Mesas Redondas, Sillas Tiffany, Vajilla Premium",
    },
    {
      id: 6,
      name: "Paquete 6",
      description: "80 personas: Mesas Cuadradas, Sillas Clásicas, Cristalería Básica",
    },
    {
      id: 7,
      name: "Paquete 7",
      description: "120 personas: Mesas Rectangulares, Sillas Lounge, Decoración Incluida",
    },
    {
      id: 8,
      name: "Paquete 8",
      description: "400 personas: Mesas Premium, Sillas Exclusivas, Cristalería de Lujo",
    },
  ];

  return (
    <section className="Paquetes">
      <h2 className='Title_paquetes'>Paquetes Disponibles</h2>
      <div className="packages">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Paquetes;
