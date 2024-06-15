import { Container, Card, Row, Col } from "react-bootstrap";    
import {BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi"

const Conocimientos = () => {
    return (
        <Container className="text-light my-5" id="conocimientos">
            <div data-aos="fade-down">
            <h3 className='display-3 text-center'>Conocimientos</h3>
            </div>
            <div data-aos="fade-left">
            <h4 className="display-4">Frontend</h4>
            <hr></hr>
            <Row>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3"><span><BiLogoHtml5 className="html-icono fs-2"/></span>HTML</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3"><span><BiLogoCss3 className="css-icono fs-2"></BiLogoCss3></span>CSS</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6} className="my-md-3">
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3"><span><BiLogoJavascript className="js-icono fs-2"></BiLogoJavascript></span>Javascript</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6} className="my-md-3">
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3"><span><BiLogoReact className="react-icono fs-2"></BiLogoReact></span>React</Card.Body>
            </Card>
            </Col>
            </Row>
            <h4 className="display-4">Backend</h4>
            <hr />
            <Row>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3"><span><BiLogoNodejs className="nodejsmongo-icono fs-2"></BiLogoNodejs></span>Node Js</Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={6}>
            <Card bg="dark"> 
            <Card.Body className="text-light fs-3"><span><BiLogoMongodb className="nodejsmongo-icono fs-2"></BiLogoMongodb></span>Mongo DB</Card.Body>
            </Card>
            </Col>
            </Row>
            </div>
        </Container>
    );
};

export default Conocimientos;