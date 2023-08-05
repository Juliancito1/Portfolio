import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Imagen_CV from "../assets/Imagen_CV.jpeg";
import programando from "../assets/programando.gif"
import Contacto from "./Contacto";
import Redirigir from "./Redirigir";
const Principal = () => {
  return (
    <section className="text-light">
      <Container className="my-5">
        <Row>
        <Col md={6}>
        <section className="container">
          <h2 className="text-center my-3 display-4">Bienvenidos</h2>
          <p className="text-center fw-bold display-5">
            Mi nombre es Julian Martin, encontraran algunos de mis proyectos y alguna informacion sobre mi
          </p>
        </section>
        </Col>
        <Col md={6}>
          <img className="w-100" src={programando} alt="programando" />
        </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Principal;
