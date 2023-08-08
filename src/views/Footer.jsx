import { Col, Container, Row, Button } from "react-bootstrap";
import logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="text-light navbaryfooter py-5 mt-5">
      <Container className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col md={2} className="text-center">
            <a href="#home">
              <img className="logo" src={logo}></img>
            </a>
          </Col>
          <Col md={7}>
            <h3 className="display-4 mt-lg-3 my-5 my-md-0">Gracias por visitar mi portfolio</h3>
          </Col>
          <Col md={3} className="d-flex flex-column mt-lg-4">
            <Button variant="dark fs-3" id="boton-navbar" href="#home">Volver Arriba</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
