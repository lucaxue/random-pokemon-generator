import React, { useReducer, useEffect } from 'react';
import './index.css';

//reducer only accepts action of type POKEMON, with a payload of the actual pokemon
function reducer(state, action) {
  switch (action.type) {
    case 'POKEMON':
      return action.payload;
    default:
      return state;
  }
}

function PokemonViewer({ id }) {
  const [pokemon, dispatch] = useReducer(reducer, null);

  //fetches Pokemon from API, and dispatches action of type POKEMON, and payload of the actual pokemon
  useEffect(() => {
    async function getPokemon() {
      let res = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}/${id}`);
      let data = await res.json();
      dispatch({ type: 'POKEMON', payload: data });
    }
    getPokemon();
  }, [id]);

  //loading before API fetches Pokemon
  if (!pokemon) {
    return <h1>loading...</h1>;
  }

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
