import './App.css';

function Pokecard({id=11, name='oy', type='fire', base_exp='72'}) {
  return (
    <div className='card'>
      <div className='top'>
        <h3>{name}</h3>
      </div>
      <div className='mid'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      </div>
      <div className='buttom'>
        <div className='first'>
          <p>Type: {type}</p>
        </div>
        <div className='second'>
          <p>EXP: {base_exp}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokecard;