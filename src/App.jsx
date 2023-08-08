import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from './components/Principal'
import Menu from './views/Menu';
import Info from './components/Info';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
function App() {

  return (
    <section className='mainSection'>
        <Menu></Menu>
        <Principal/>
        <Info></Info>
        <Conocimientos></Conocimientos>
        <Proyectos></Proyectos>
    </section>
  )
  }

export default App
