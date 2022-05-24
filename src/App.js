import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {

  const [pokemon, setPokemon] = useState("");
  const {loading,error, refetch,choosenPokemon} = useFetch();

  const handleChange = e => {
    const search = e.target.value
    setPokemon(search.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch(pokemon)
  }

  return (
    <div className='App'>
      <div className="App__header">
        <h1>PokeSearch</h1>
        <form onSubmit={e=>handleSubmit(e)}>
          <input 
            onChange={e=>handleChange(e)}
            type='text' 
            placeholder='Ex. Squirtle'
            required
          />
          <button 
            type='submit'
          >Search!</button>
        </form>
      </div>
      <div className='display'>
        {loading?<h1>Please wait...</h1>
        :choosenPokemon.name.length>0&&<>
          <h1>{choosenPokemon.name.toUpperCase()}</h1>
          <img src={choosenPokemon.img} alt='Pokemon Here!'/>
          <p>Type: {choosenPokemon.type}</p>
          <p>HP: {choosenPokemon.hp}</p>
          <p>Attack: {choosenPokemon.attack}</p>
          <p>Defense: {choosenPokemon.defense}</p>
          <p>Speed: {choosenPokemon.speed}</p>
        </>}
      </div>
    </div>
  );
}

export default App;
