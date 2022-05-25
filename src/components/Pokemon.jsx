import React, { useEffect, useState } from 'react'
import './pokemon.css'

export const Pokemon = ({poke}) => {

  const [pokemon, setPokemon] = useState({});

  useEffect(()=>{
    if(typeof(poke)!=='undefined') return setPokemon(poke);
  },[poke])

  return (
    <div className="pokemon__card">
      
      <div className="header">
        <h2 className='pokemon__card__title'>{pokemon.name}</h2>
        <img src={pokemon.img} alt='pokemon Here!'/>
      </div>

      <div className='content'>
        <p><span>Type:</span> {pokemon.type}</p>
        <p><span>HP:</span> {pokemon.hp}</p>
        <p><span>Attack:</span> {pokemon.attack}</p>
        <p><span>Defense:</span> {pokemon.defense}</p>
        <p><span>Speed:</span> {pokemon.speed}</p>
      </div>
    </div>
  )
}
