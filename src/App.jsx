import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from './components/Principal'
import Menu from './views/Menu';
import Info from './components/Info';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
function App() {

  return (
    <section className='mainSection'>
        <Menu></Menu>
        <Principal/>
        <Info></Info>
        <Conocimientos></Conocimientos>
        <Proyectos></Proyectos>
        <Contacto></Contacto>
    </section>
  )
  }

export default App
