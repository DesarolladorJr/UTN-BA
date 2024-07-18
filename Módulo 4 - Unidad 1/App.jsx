import './App.css'
import Pepe from './components/Card';
import coches from './data/vehicles';




function App() {
  var vehiclesList = coches.map(p =>{
    return <Pepe titulo={p.name} descripcioon={p.description}/>
  })


  return (
    <div className='App'>
      <h1>Hola React</h1>
      <div className='container '>
        {vehiclesList}
      </div>
    </div>
  );
}

export default App