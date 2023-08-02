
import { Container, Button } from "react-bootstrap";

const Redirigir = () => {
    return (
        <Container className="text-center my-5">
            <section className="d-flex justify-content-center row">
            <a href='#sobremi'><Button className="fs-4">Sobre Mi</Button></a>
            <a href='#' className="my-5"><Button className="fs-4">Conocimientos</Button></a>
            <a href='#'><Button className="fs-4">Mis Proyectos</Button></a>
            <a href='#' className="mt-5"><Button className="fs-4">Contactos</Button></a>
            </section>
        </Container>
    );
};

export default Redirigir;