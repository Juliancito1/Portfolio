import { Row, Col, Container} from 'react-bootstrap';
import {BsLinkedin} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillGithub} from 'react-icons/ai'
const Contacto = () => {
    return (
        <Container className='text-light'>
            <h2 className='mt-4 text-center display-3'>Contactos</h2>
            <hr></hr>
            <section className='my-3 text-center d-flex justify-content-center'>
                <Row>
                    <Col xs={12} md={12}>
                <a href='https://www.linkedin.com/in/juli%C3%A1n-martin-2243b0274/' className='text-decoration-none text-light fs-3 pe-0 w-50'><BsLinkedin></BsLinkedin><span>LinkedIn</span></a>
                    </Col>
                    <Col xs={12} md={12}>
                <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" className='text-decoration-none text-light fs-3 mt-3 pe-0'><HiOutlineMail></HiOutlineMail><span>juliansergiomartin@gmail.com</span></a>
                    </Col>
                    <Col xs={12} md={12}>
                <a href='https://github.com/Juliancito1' className='text-decoration-none text-light fs-3 pe-0'><AiFillGithub></AiFillGithub><span>GitHub</span></a>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default Contacto;