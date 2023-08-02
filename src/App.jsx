import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import SobreMi from './components/SobreMi'
import { Row, Col } from 'react-bootstrap';
function App() {

  return (
    <section>
      <Row>
        <Col md={6} className='p-0'>
        <SobreMi/>
        </Col>
      </Row>
    </section>
  )
}

export default App
