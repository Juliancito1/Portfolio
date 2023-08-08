import { Row, Col} from 'react-bootstrap';
import {BsLinkedin} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillGithub} from 'react-icons/ai'
const Contacto = () => {
    return (
        <section className='text-light'>
            <h2 className='mt-4 text-center display-3'>Contactos/Consultas</h2>
            <hr></hr>
            <section className='my-3 text-center d-flex justify-content-center'>
                <Row>
                    <Col md={12}>
                <a href='https://www.linkedin.com/in/juli%C3%A1n-martin-2243b0274/' className='text-decoration-none text-light fs-2'><BsLinkedin></BsLinkedin><span>LinkedIn</span></a>
                    </Col>
                    <Col md={12}>
                <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" className='text-decoration-none text-light fs-2 mt-3'><HiOutlineMail></HiOutlineMail><span>juliansergiomartin@gmail.com</span></a>
                    </Col>
                    <Col md={12}>
                <a href='https://github.com/Juliancito1' className='text-decoration-none text-light fs-2'><AiFillGithub></AiFillGithub><span>GitHub</span></a>
                    </Col>
                </Row>
            </section>
        </section>
    );
};

export default Contacto;