import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from './components/Principal'
import Menu from './views/Menu';
import SobreMi from './components/SobreMi';
import Conocimientos from './components/Conocimientos';
function App() {

  return (
    <section className='mainSection'>
        <Menu></Menu>
        <Principal/>
        <SobreMi></SobreMi>
        <Conocimientos></Conocimientos>
    </section>
  )
}

export default App
