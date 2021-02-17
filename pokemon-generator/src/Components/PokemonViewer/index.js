import React, { useReducer, useEffect } from 'react';

const initialPokemon = {
  name: 'pikachu',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
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
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  const [pokemon, dispatch] = useReducer(reducer, initialPokemon);

  async function getPokemon() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await res.json();
    dispatch({ type: 'POKEMON', payload: data });
  }
  useEffect(() => {
    getPokemon();
  }, [id]);

  return (
    <div className="pokemon-viewer">
      <p>{pokemon.name}</p>
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} front sprite`}
      />
    </div>
  );
}

export default PokemonViewer;
