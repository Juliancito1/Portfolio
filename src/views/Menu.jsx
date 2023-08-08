import { Navbar, Nav, Container, Button  } from "react-bootstrap";
import logo from "../assets/Logo.png"
const Menu = () => {
    return (
        <Navbar expand="lg" className="pb-2 navbaryfooter" fixed="top">
      <Container fluid >
        <Navbar.Brand href="#home">
          <img className="logo" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#sobremi"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Sobre Mi</Button></Nav.Link>
            <Nav.Link href="#conocimientos"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Conocimientos</Button></Nav.Link>
            <Nav.Link href="#proyectos"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Proyectos</Button></Nav.Link>
            <Nav.Link href="#link"><Button variant="dark" className="fs-3 w-100" id="boton-navbar">Contacto</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;