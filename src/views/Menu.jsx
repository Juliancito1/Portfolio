import { Navbar, Nav, Container  } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Sobre Mi</Nav.Link>
            <Nav.Link href="#link">Conocimientos</Nav.Link>
            <Nav.Link href="#link">Proyectos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;