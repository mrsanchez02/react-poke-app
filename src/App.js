import { useState } from 'react';
import './App.css';
import { Pokemon } from './components/Pokemon';
import useFetch from './hooks/useFetch';

function App() {

  const [pokemon, setPokemon] = useState("");
  const {loading,error,refetch,choosenPokemon} = useFetch();

  const handleChange = e => {
    const search = e.target.value
    setPokemon(search.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch(pokemon)
    setPokemon("");
  }

  return (
    <div className='App'>
      <div className="App__header">
        <h1>PokeSearch</h1>
        <form onSubmit={e=>handleSubmit(e)}>
          <input 
            onChange={e=>handleChange(e)}
            type='text' 
            placeholder="Ex. 'Squirtle' or '7'"
            value={pokemon}
            required
          />
          <button 
            type='submit'
          >Search!</button>
        </form>
      </div>
      <div className='display'>
        {loading&&<div className='display__loading'>
          Loading, please wait...
        </div>}
        {error&&<div className='display__error'>
          Sorry, Pokemon not found, try again your search...
        </div>}
        { choosenPokemon.name.length>0
          ?<Pokemon poke={choosenPokemon}/>
          :<p>Start your search...</p>
        }
      </div>
    </div>
  );
}

export default App;
