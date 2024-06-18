import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import proyectobondia from "../assets/Proyecto.png"
import proyecto2 from "../assets/Proyecto2.png"
import RollingBank from "../assets/RollingBank.jpg"

const Proyectos = () => {
    return (
        <Container className='text-center text-light' data-aos="fade-down">
            <h2 className='display-3' id='proyectos'>Proyectos</h2>
            <hr></hr>
            <Row>
            <Col md={6}>
            <Card bg='dark'>
                <Card.Header className='border-0'>
                    <Card.Title>
                        <img className='projectImage' src={proyecto2} alt="Portada Tucumánime" />
                        <h2 className='text-light mt-3'>Tucumánime</h2>
                        </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Button target='_blank' href='https://tucumananimeprototipo.netlify.app/' variant='light' className='fs-4 me-2 me-lg-4'>Live Demo</Button>
                    <Button target='_blank' href='https://github.com/mariju92/proyecto-final-modulo-2' variant='light' className='fs-4'>Repositorio</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col md={6}>
            <Card bg='dark' className='h-100 mt-4 mt-md-0'>
                <Card.Header className='border-0'>
                    <Card.Title>
                    <img className='projectImage' src={proyectobondia} alt="Portada Bon Dia" />
                    <h2 className='text-light mt-3'>Bon Dia</h2>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Button target='_blank' href='https://bondia-restaurant.netlify.app/'variant='light' className='fs-4 me-2 me-lg-4'>Live Demo</Button>
                    <Button target='_blank' href='https://github.com/MauroDiazSantilli/ProyectoFinal-Grupo3'variant='light' className='fs-4'>Repositorio</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col md={6} className='mt-3'>
            <Card bg='dark' className='h-100   mt-md-0'>
                <Card.Header className='border-0'>
                    <Card.Title>
                    <img className='projectImage' src={RollingBank} alt="Portada Rolling Bank" />
                    <h2 className='text-light mt-3'>Rolling Bank</h2>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Button target='_blank' href='https://rollingbank-site.netlify.app/'variant='light' className='fs-4 me-2 me-lg-4'>Live Demo</Button>
                    <Button target='_blank' href='https://github.com/Juliancito1/RollingBank'variant='light' className='fs-4'>Repositorio</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default Proyectos;