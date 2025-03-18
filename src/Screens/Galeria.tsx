import React from 'react'
import Galery from '../componentsGaleria/Galery'
import FooterInf from '../components/FooterInf'
import ContactForm from '../componentsGaleria/ContactForm'
import FloatingButton from '../ComponentsInicio/FloatingButton';
import NavBaar from '../components/NavBaar';

const Galeria = () => {
  return (
    <div>
      <NavBaar/>
      <Galery/>
      <FloatingButton/>
      <ContactForm/>
      <FooterInf/>    
    </div>
  )
}

export default Galeria
