import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])

  const [searchInput, setSearchInput] = useState("")

  const [nameInput, setNameInput] = useState("")
  const [hpInput, setHpInput] = useState("")
  const [frontUrlInput, setFrontUrlInput] = useState("")
  const [backUrlInput, setBackUrlInput] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((pokemonData) => setPokemonArray(pokemonData));
  }, []);

  function pokeSearch(event){
    // console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  // console.log(searchInput)

  const searchedPokemon = pokemonArray.filter((pokemon) => 
  pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))



  function handleNameInput(event){
    console.log(event.target.value)
    setNameInput(event.target.value)

    

  }

  function handleHpInput(event){
    console.log(event.target.value)
    setHpInput(event.target.value)

    

  }
  
  function handleFrontUrlInput(event){
    console.log(event.target.value)
    setFrontUrlInput(event.target.value)


  }

  function handleBackUrlInput(event){
    console.log(event.target.value)
    setBackUrlInput(event.target.value)


  }

  function handlePokeForm(){

    const newPokemon = {
      name: nameInput,
      hp: hpInput,
      sprites: {
        front: frontUrlInput,
        back: backUrlInput
      }
    }

    if(newPokemon.name === "" || newPokemon.hp === "") return

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then((newPokemonData) => setPokemonArray([...pokemonArray, newPokemonData]));






  }

  // console.log(nameInput, hpInput, frontUrlInput, backUrlInput)








  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNameInput={handleNameInput} handleHpInput={handleHpInput} handleFrontUrlInput={handleFrontUrlInput} handleBackUrlInput={handleBackUrlInput} handlePokeForm={handlePokeForm}/>
      <br />
      <Search pokeSearch={pokeSearch}/>
      <br />
      <PokemonCollection pokemonArray={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
