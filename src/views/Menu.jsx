import { Navbar, Nav, Container  } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-secondary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#sobremi">Sobre Mi</Nav.Link>
            <Nav.Link href="#conocimientos">Conocimientos</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;