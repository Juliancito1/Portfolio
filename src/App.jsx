import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from './components/Principal'
import Menu from './views/Menu';
function App() {

  return (
    <section className='mainSection'>
        <Menu></Menu>
        <Principal/>
    </section>
  )
}

export default App
