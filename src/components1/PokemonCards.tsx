


function PokemonCards({pokemon}) {


  return (
    <div>
     <img src={pokemon.imgSrc} alt={pokemon.name} /> 

     <figcaption>{pokemon.name}</figcaption>
    </div>
  );
  // ...
}



  
  export default PokemonCards;

