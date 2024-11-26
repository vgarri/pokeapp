import React ,{useState,useEffect, useContext} from "react";
import { context } from "../../../../context/context";
import Card from "./Card/Card";
import {v4 as uuidv4} from "uuid";
import axios from "axios";


const ListaPokemon = () => {
  const { pokemon } = useContext(context)
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSearched, setPokemonSearched] = useState([]);
  const renderCards = () => {
    return pokemonList.map((pokemon,i) => <Card data={pokemon} key={uuidv4()} />);
  };
  const renderSearchedCard = () => {
    return pokemonSearched ? pokemonSearched.map((pok, i) => <Card data={pok} key={uuidv4()} />) : ""
  }


 useEffect(() => {
  const getPokemons = async () => {
    try {
      const resp2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000`)
      setPokemonList(resp2.data.results)
      
    } catch (err) {
      console.log(err)
    }

  }

  getPokemons();
}, []);

// FETCH DEL SEARCH
useEffect(() => {
  const getPokemonBySearch = async () => {
    try {
      // Se ejecuta sólo cuando pokemonSearch no está vacío
      if (pokemon.length > 0) {
        const pokemonToSearch = pokemon[pokemon.length - 1];
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`);
        console.log(resp)
        setPokemonSearched([...pokemonSearched, resp.data]);
      }
    } catch (err) {
      console.log(err)
    }
  }
  getPokemonBySearch();
}, [pokemon]);



  return (<>
  <section className="pokemon-list">
    {pokemonSearched.length > 0 ? renderSearchedCard() : renderCards()}

    
  </section>
  </>);
};

export default ListaPokemon;
