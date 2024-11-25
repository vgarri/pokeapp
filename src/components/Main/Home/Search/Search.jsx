import React, { useState, useContext } from "react";
import { context } from "../../../../context/context";
import pokemonLogo from "../../../../assets/pokemonLogo.png";

const Search = () => {

  const [values, setValue] = useState("")
  // const [pokemonSearch, setPokemonSearch] = useState("")

  const { updatePokemon } = useContext(context);




  const handleSubmit = (e) => {
    e.preventDefault()
    updatePokemon(values)
    setValue("")

  }

  const handleChange = (e) => {//Funcion para handlear el estado. ...values spread op. e.target.name: e.target value
    setValue(e.target.value);
  }


  return <>
    <header>
      <img src={pokemonLogo}></img>
    </header>

    <form onSubmit={handleSubmit}>

      <label htmlFor="name"></label><br />
      <input type="text" name="title" value={values} onChange={handleChange} required></input>
      <button type="submit">🔎</button>
    </form>
  </>
};

export default Search;
