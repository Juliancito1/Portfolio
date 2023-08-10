import { Navbar, Nav, Container, Button  } from "react-bootstrap";
import logo from "../assets/Logo.png"
const Menu = () => {
    return (
        <Navbar expand="lg" className="pb-2 bg-dark" fixed="top">
      <Container >
        <Navbar.Brand href="#home">
          <h2 className="text-light mt-lg-2">Mi Portfolio</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#sobremi"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Sobre Mi</Button></Nav.Link>
            <Nav.Link href="#conocimientos"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Conocimientos</Button></Nav.Link>
            <Nav.Link href="#proyectos"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Proyectos</Button></Nav.Link>
            <Nav.Link href="#contactos"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Contactos</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;