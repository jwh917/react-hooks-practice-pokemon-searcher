import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArray}) {
  // console.log(pokemonArray)

  const pokemonDisplayed = pokemonArray.map((pokemon) => {
    return (
      <PokemonCard
      key={pokemon.id}
      pokemon={pokemon} 
      />
    )})
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonDisplayed}
    </Card.Group>
  );
}

export default PokemonCollection;
