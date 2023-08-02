import React from "react";
import { Container } from "react-bootstrap";
import Imagen_CV from "../assets/Imagen_CV.jpeg";
const SobreMi = () => {
  return (
    <section className="mainSection text-light">
      <Container>
        <div className="text-center">
          <img src={Imagen_CV} className="rounded-circle w-25"></img>
        </div>
        <h1 className="display-1 text-center">Julian Martin</h1>
        <section className="container">
          <h2>Sobre Mi</h2>
          <p className="fs-5">
            Soy un chico, que busca mejorar sus conocimientos en la programación
            y superarse en el día a día. Dando lo mejor de mi y logrando hacer
            un gran trabajo en cada proyecto que me proponga
          </p>
        </section>
      </Container>
    </section>
  );
};

export default SobreMi;
