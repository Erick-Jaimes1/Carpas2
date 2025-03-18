import React from 'react'
import NavBaar from '../components/NavBaar';
import FloatingButton from '../ComponentsInicio/FloatingButton';
import HeroSection from '../ComponentsInicio/HeroSection';
import Paquetes from '../ComponentsInicio/Paquetes';
import ComentariosSection from '../ComponentsInicio/ComentariosSection';
import PreguntaSection from '../ComponentsInicio/PreguntaSection';
import FooterInf from '../components/FooterInf';
import Catalogo from '../ComponentsInicio/Catalogo';

const Inicio = () => {
  return (
    <div>
      <NavBaar/>
      <FloatingButton/>
      <HeroSection/>
      <Paquetes/>
      <Catalogo/>
      <PreguntaSection/>
      <ComentariosSection/>
      <FooterInf/>
    </div>
  )
}

export default Inicio
