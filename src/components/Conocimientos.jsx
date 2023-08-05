import { Container, Card, Row, Col } from "react-bootstrap";

const Conocimientos = () => {
    return (
        <Container className="text-light my-5">
            <h3 className='display-3 text-center'>Conocimientos</h3>
            <h4 className="display-4">Frontend</h4>
            <hr></hr>
            <Row>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3">HTML</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3">CSS</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6} className="my-md-3">
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3">Javascript</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6} className="my-md-3">
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3">React</Card.Body>
            </Card>
            </Col>
            </Row>
            <h4 className="display-4">Backend</h4>
            <hr />
            <Row>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3">Node Js</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3">Mongo DB</Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default Conocimientos;