import React, { useReducer, useEffect } from 'react';

const initialPokemon = {
  name: "",
  sprites: {
    front_default:"",
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
    console.log(process.env.REACT_APP_POKEMON_API_URL);
    let res = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}/${id}`);
    // let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
