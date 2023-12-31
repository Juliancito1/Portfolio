import { Col, Container, Row, Button } from "react-bootstrap";
import logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="text-light bg-dark py-5 mt-5">
      <Container className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col md={2} className="text-center">
            <a href="#home" className="text-decoration-none">
              <h2 className="text-light mt-lg-4">Mi Portfolio</h2>
            </a>
          </Col>
          <Col md={7}>
            <h3 className="display-4 mt-lg-2 my-5 my-md-0">Gracias por visitar mi portfolio</h3>
          </Col>
          <Col md={3} className="d-flex flex-column mt-lg-3 ">
            <Button variant="dark fs-3" id="boton-navbar" href="#home">Volver Arriba</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
