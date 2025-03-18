import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/NavBaar.css';  // Asumiendo que los estilos de Navbar y Footer están en sus respectivos archivos

const NavbarYFooter: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          {/* Menú izquierdo */}
          <ul className={`left-menu ${menuOpen ? 'show' : ''}`}>
            <li>
              <Link to="/inicio">INICIO</Link>
            </li>
            <li
              className="menu-item"
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
              onClick={toggleSubmenu}
            >
              <Link to="/moviliario">MOVILIARIO</Link>
              <ul className={`submenu ${submenuOpen ? 'show' : ''}`}>
                <li><Link to="/moviliario/mesas">Mesas</Link></li>
                <li><Link to="/moviliario/sillas">Sillas</Link></li>
                <li><Link to="/moviliario/cristaleria">Cristalería</Link></li>
                <li><Link to="/moviliario/vajillas">Vajillas</Link></li>
                <li><Link to="/moviliario/manteleria">Mantelería</Link></li>
                <li><Link to="/moviliario/salas">Salas</Link></li>
                <li><Link to="/moviliario/carpas">Carpas</Link></li>
                <li><Link to="/moviliario/inflables">Inflables</Link></li>
                <li><Link to="/moviliario/tarimas">Tarimas</Link></li>
              </ul>
            </li>
          </ul>

          <div className="logo">
            <img src="./Images/logo.png" alt="Logo" />
          </div>

          {/* Menú derecho */}
          <ul className={`right-menu ${menuOpen ? 'show' : ''}`}>
            <li>
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/galeria">GALERÍA</Link>
            </li>
          </ul>

          {/* Ícono del menú hamburguesa */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          {/* Menú colapsado para móviles */}
          <ul className={`menu-collapsed ${menuOpen ? 'show' : ''}`}>
            <li>
              <Link to="/inicio">INICIO</Link>
            </li>
            <li className="menu-item" onClick={toggleSubmenu}>
              <Link to="/moviliario">MOVILIARIO</Link>
              <ul className={`submenu ${submenuOpen ? 'show' : ''}`}>
                <li><Link to="/moviliario/mesas">Mesas</Link></li>
                <li><Link to="/moviliario/sillas">Sillas</Link></li>
                <li><Link to="/moviliario/cristaleria">Cristalería</Link></li>
                <li><Link to="/moviliario/vajillas">Vajillas</Link></li>
                <li><Link to="/moviliario/manteleria">Mantelería</Link></li>
                <li><Link to="/moviliario/salas">Salas</Link></li>
                <li><Link to="/moviliario/carpas">Carpas</Link></li>
                <li><Link to="/moviliario/inflables">Inflables</Link></li>
                <li><Link to="/moviliario/tarimas">Tarimas</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/galeria">GALERÍA</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Footer */}
      <div>
        <div className="header-footer">
          <div className="header-footer-brand">
            <h1 className="header-footer-brand-name">Carpas Up & Down</h1>
            <p className="header-footer-slogan">Elegancia para tu evento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarYFooter;
