import React from "react";

const DetailCard = (pokemon) => {
  const {species,id,height, weight, types, abilities} = pokemon.data
const imageUrlShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <div className="pokecard">
    <h2>{species.name[0].toUpperCase()+species.name.slice(1)}</h2>
    <h4>Types: {types[0].type.name }{types[1] ?", "+types[1].type.name : ""}</h4>
    <img src={imageUrlShiny}></img>
    <h5>Ability: {abilities[0].ability.name}</h5>
    <h5>Height: {height/10} m</h5>
    <h5>Weight: {weight/10} kg</h5>
    </div>
    )
};

export default DetailCard;
