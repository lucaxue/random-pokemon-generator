import React, { useReducer, useEffect } from 'react';
import './index.css';

const initialPokemon = {
  name: '',
  sprites: {
    front_default: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'POKEMON':
      return action.payload;
    default:
      return state;
  }
}

function PokemonViewer({ id }) {
  const [pokemon, dispatch] = useReducer(reducer, initialPokemon);

  async function getPokemon() {
    let res = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}/${id}`);
    let data = await res.json();
    dispatch({ type: 'POKEMON', payload: data });
  }
  useEffect(() => {
    getPokemon();
  }, [id]);

  return (
    <div className="pokemon-viewer">
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} front sprite`}
      />
      <h2>{pokemon.name}</h2>
    </div>
  );
}

export default PokemonViewer;
