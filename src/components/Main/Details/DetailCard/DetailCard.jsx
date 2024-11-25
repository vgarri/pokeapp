import React from "react";

const DetailCard = (pokemon) => {
  const { species, id, height, weight, types, abilities, stats } = pokemon.data
  const imageUrlShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  console.log(stats[0])
  return (
    <div className="pokecard">
      <h2>{species.name[0].toUpperCase() + species.name.slice(1)}</h2>
      <h4>Types: {types[0].type.name}{types[1] ? ", " + types[1].type.name : ""}</h4>
      <img src={imageUrlShiny}></img>
      <h4>Ability: {abilities[0].ability.name}</h4>
      <h5>Height: {height / 10} m</h5>
      <h5>Weight: {weight / 10} kg</h5>
      <article className="stats">
        <h3>Stats:</h3>
        <p>{stats[0].stat.name}: {stats[0].base_stat}</p>
        <p>{stats[1].stat.name}: {stats[1].base_stat}</p>
        <p>{stats[2].stat.name}: {stats[2].base_stat}</p>
        <p>{stats[3].stat.name}: {stats[3].base_stat}</p>
        <p>{stats[4].stat.name}: {stats[4].base_stat}</p>
        <p>{stats[5].stat.name}: {stats[5].base_stat}</p>
      </article>
    </div>
  )
};

export default DetailCard;
