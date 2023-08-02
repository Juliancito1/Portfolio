import React from "react";
import { Container } from "react-bootstrap";
import Imagen_CV from "../assets/Imagen_CV.jpeg";
import Contacto from "./Contacto";
import Redirigir from "./Redirigir";
const SobreMi = () => {
  return (
    <section className="text-light">
      <Container>
        <div className="text-center">
          <img src={Imagen_CV} className="rounded-circle w-25"></img>
        </div>
        <h1 className="display-1 text-center">Julian Martin</h1>
        <Redirigir></Redirigir>
        <section className="container" id="sobremi">
          <h2 className="text-center my-3">Sobre Mi</h2>
          <p className="fs-3 text-center fw-bold">
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
