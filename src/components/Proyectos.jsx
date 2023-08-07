import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import proyectobondia from "../assets/Proyecto.png"
const Proyectos = () => {
    return (
        <Container className='text-center text-light'>
            <h2 className='display-3'>Proyectos</h2>
            <hr></hr>
            <Row>
            <Col md={6}>
            <Card>
                <Card.Header>
                    <img className='img-fluid' src={proyectobondia} alt="" />
                </Card.Header>
                <Card.Body>
                    Este fue un proyecto realizado de forma grupal
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button variant='dark' className='fs-3'>Ver proyecto</Button>
                </Card.Footer>
            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default Proyectos;