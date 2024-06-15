import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import proyectobondia from "../assets/Proyecto.png"
import proyecto2 from "../assets/Proyecto2.png"
const Proyectos = () => {
    return (
        <Container className='text-center text-light' data-aos="fade-down">
            <h2 className='display-3' id='proyectos'>Proyectos</h2>
            <hr></hr>
            <Row>
            <Col md={6}>
            <Card bg='dark'>
                <Card.Header>
                    <Card.Title>
                        <img className='projectImage' src={proyecto2} alt="" />
                        </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fs-2 text-light'>
                    Tucumánime proyecto sobre sitio web basado en la venta de productos de ánime, realizado de forma grupal
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button href='https://tucumananimeprototipo.netlify.app/' variant='light' className='fs-3'>Ver proyecto</Button>
                </Card.Footer>
            </Card>
            </Col>
            <Col md={6}>
            <Card bg='dark' className='h-100 mt-4 mt-md-0'>
                <Card.Header>
                    <Card.Title>
                    <img className='projectImage' src={proyectobondia} alt="" />
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fs-2 text-light'>
                    Bon Dia fue un sitio web creado de forma grupal, el mismo se basa en un sistema de pedidos de un restaurante
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button href='https://bondia-restaurant.netlify.app/'variant='light' className='fs-3'>Ver proyecto</Button>
                </Card.Footer>
            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default Proyectos;