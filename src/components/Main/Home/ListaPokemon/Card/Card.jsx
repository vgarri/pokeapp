import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (pokemon) => { 

const isSearched = pokemon.data.abilities;
const isCreatedByUser = pokemon.data.id;


if(isSearched){
const {species,id} = pokemon.data
const imageUrlShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
const idThreeLength = String(id).padStart(3, '0')
  return (
    <div className="pokecard">
    <h3>#{idThreeLength}</h3>
    <h3>{species.name}</h3>
    <img src={imageUrlShiny}></img>
    <h2></h2>
    </div>
    )
  }
  if(isCreatedByUser){
    const {id, name, img_url, type1, type2} = pokemon.data

    return (
      <div className="pokecard">
      <h3>#{id}</h3>
      <h2>{name}</h2>
      <img src={img_url}></img>
      <h3>Types: {type1},{type2}</h3>
      </div>
      )




} else {
const {name, url} = pokemon.data;
const pokemonId = url.split("/")[url.split("/").length - 2];
// Guardamos en una variable la URL para pasársela al src de la img
const imageUrlShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonId}.png`
const navigate = useNavigate();
const details = () => navigate(`/pokemon/${pokemonId}`);
const idThreeLength = String(pokemonId).padStart(3, '0')

  return (
  <div className="pokecard">
  <h3>#{idThreeLength}</h3>
  <h1>{name[0].toUpperCase()+name.slice(1)}</h1>
  <img src={imageUrlShiny}></img>
  <button onClick={details}>Details</button>
  </div>
  )
}
};

export default Card;
//  <Link to href={url}></Link>


