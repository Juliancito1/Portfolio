import React from 'react';
import Avatar from '../assets/Avatar.jpeg'
const SobreMi = () => {
    return (
        <section className="container text-light" id="sobremi">
          <h2 className="text-center my-3 display-3">Sobre Mi</h2>
          <div className='text-center'>
            <img src={Avatar} alt="" className='rounded-circle img-fluid'/>
          </div>
          <p className="fs-3 text-center">
            Soy un chico, que busca mejorar sus conocimientos en la programación
            y superarse en el día a día. Dando lo mejor de mi y logrando hacer
            un gran trabajo en cada proyecto que me proponga
          </p>
          <hr></hr>
        </section>
    );
};

export default SobreMi;