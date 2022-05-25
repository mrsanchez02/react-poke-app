import {useState} from 'react';
import axios from 'axios';

const useFetch = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [choosenPokemon, setChoosenPokemon] = useState({
    id:0,
    name:"",
    img:"",
    hp:0,
    attack:0,
    defense:0,
    speed:0,
    type:""
  });

  const refetch = (POKE) => {
    let URL = `https://pokeapi.co/api/v2/pokemon/${POKE}`;
    setLoading(true);
    axios.get(URL)
    .then(res => {
      setData(res)
      setChoosenPokemon({
        id:res.data.id,
        name:res.data.name,
        img:res.data.sprites.front_default,
        hp:res.data.stats[0].base_stat,
        attack:res.data.stats[1].base_stat,
        defense:res.data.stats[2].base_stat,
        speed:res.data.stats[4].base_stat,
        type:res.data.types[0].type.name
      })
    })
    .catch(err => {
      setError(err);
    })
    .finally(()=> {
      setLoading(false)
    });
  }

  return {data,loading,error, setError, refetch,choosenPokemon}
}

export default useFetch;