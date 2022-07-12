import React from "react";

function Search({pokeSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={pokeSearch}/>
        <i className="search icon" />
      </div>
      <h1>PokeDex Collection</h1>
      <i><img src="https://www.d20radio.com/main/wp-content/uploads/2019/04/Pokemon-GO-GEN-4-Pokedex.png" alt="PokeDex"/></i>
    </div>
  );
}

export default Search;
