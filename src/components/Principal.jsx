import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Principal = () => {
  return (
    <section className="text-light my-5 pt-lg-5" data-aos="fade-right" id="home">
      <Container fluid className="my-5">
        <section className="container pres rounded-pill fade-up">
          <h2 className="my-3 display-1 text-center">Bienvenidos</h2>
          <p className="display-4 text-center text-md-center">
            Mi nombre es <span className="fw-bold">Julian Martin</span>, encontraran algunos de mis proyectos e informacion sobre mi
          </p>
        </section>
      </Container>
    </section>
  );
};

export default Principal;
