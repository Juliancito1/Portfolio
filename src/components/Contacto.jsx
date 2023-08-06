import { Container } from 'react-bootstrap';
import {BsLinkedin} from 'react-icons/bs'
const Contacto = () => {
    return (
        <section>
            <h2 className='mt-4 text-center'>Contactos</h2>
            <section className='my-3 text-center'>
                <a href='https://www.linkedin.com/in/juli%C3%A1n-martin-2243b0274/' className='text-decoration-none text-light fs-2'><BsLinkedin></BsLinkedin></a>
            </section>
        </section>
    );
};

export default Contacto;