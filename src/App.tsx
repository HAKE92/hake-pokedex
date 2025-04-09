import './App.css'
import PokemonCards from './components1/PokemonCards';
import { useState } from 'react';
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },


];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <PokemonCards pokemon={pokemon} />
      <button onClick={() => setPokemonName("bulbasaur")}>bulbasaur</button>
      <button onClick={() => setPokemonName("mew")}>mew</button>

    </div>
  );


}




export default App;
