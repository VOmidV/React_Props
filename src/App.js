import './App.css';
import Pokedex from './Pokedex'
import Pokecard from './Pokecard'


function App() {
  const oy = Pokedex;
  return (
    <div className='main'>
      {
        oy.map(v => <Pokecard id={v.id} name={v.name} type={v.type} base_exp={v.base_experience}/>)
      }
    </div>
  );
}

export default App;
