import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Imagen_CV from "../assets/Imagen_CV.jpeg";
import programando from "../assets/programando.gif"
import Contacto from "./Contacto";
const Principal = () => {
  return (
    <section className="text-light my-5 pt-lg-5" id="home">
      <Container fluid className="my-5">
        <Row>
        <Col md={12} lg={12}>
        <section className="container pres rounded-pill">
          <h2 className="my-3 display-1 text-center">Bienvenidos</h2>
          <p className="display-4 text-center text-md-center">
            Mi nombre es Julian Martin, encontraran algunos de mis proyectos e informacion sobre mi
          </p>

        </section>
        </Col>
        <Col md={12} lg={12} className="text-center text-md-center">
          <img className="programando" src={programando} alt="programando" />
        </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Principal;
