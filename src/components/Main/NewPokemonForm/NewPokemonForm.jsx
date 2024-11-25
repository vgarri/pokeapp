import React from "react";
import { useState,useContext } from "react"
import {context} from "../../../context/context"
import Card from "../Home/ListaPokemon/Card/Card";

const NewPokemonForm = () => {
  const {updatePokemon, updateCreatedPokemon, createdPokemon} = useContext(context);
  const renderCreatedPokemon = () => {
    return createdPokemon.map((pokemon, i) => <Card data={pokemon} />);
  }
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    image: '',
    typeOne: '',
    typeTwo: ''
  });

  const addNewPokemon = (new_Pokemon) => {
    updateCreatedPokemon(new_Pokemon); // actualiza estado pokemon
   }



  const handleChange = (e) => {//Funcion para handlear el estado. ...values spread op. e.target.name: e.target value
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewPokemon(formValues)
    console.log(formValues)

  }










  return <>

    
    <div id="newPokemonForm">
      <h1>Who's that pokemon?</h1>

      <form className="newPokemonForm" onSubmit={handleSubmit}>

        <input type="text" name="id" placeholder="id" onChange={handleChange} />

        <input type="text" name="name" placeholder="name" onChange={handleChange} />

        <input type="text" name="img_url" placeholder="Img Url" onChange={handleChange} />

        <input type="text" name="type1" placeholder="type 1" onChange={handleChange} />

        <input type="text" name="type2" placeholder="type 2" onChange={handleChange} />

        <button className="newPokemonButton" type="submit">Create</button>

      </form>
      {renderCreatedPokemon()}


    </div>
  </>
};

export default NewPokemonForm;
