import React from 'react';
import Foto from '../assets/Imagen_CV.jpeg'
import CV from '../assets/CV-Julian.pdf'
import { Button } from 'react-bootstrap';
const Info = () => {
    return (
        <section className="container text-light" data-aos="fade-up" id="sobremi">
          <h2 className="text-center my-3 display-3">Sobre Mi</h2>
          <div className='text-center'>
            <img src={Foto} alt="" className='rounded-circle imagen-perfil'/>
          </div>
          <p className="fs-2 text-center my-5">
            Soy un chico, que busca mejorar sus conocimientos en la programación
            y superarse en el día a día. Dando lo mejor de mi y logrando hacer
            un gran trabajo en cada proyecto que me proponga
          </p>
          <section className='text-center mb-5'>
            <a href={CV}  download="CV Julian">
          <Button variant='dark' className='fs-3 w-75' id='boton-navbar'>Descargar mi CV</Button>
            </a>
          </section>
          <hr></hr>
        </section>
    );
};

export default Info;