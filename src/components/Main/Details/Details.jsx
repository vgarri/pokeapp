import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCard from "../Details/DetailCard/DetailCard";

const Details = () => {
  const routeParams = useParams();
  const [paramPokemonData,setParamPokemonData] = useState([]);
  const renderParamCard = () => {
    return  <DetailCard data={paramPokemonData} />
  }
  useEffect(() => {
    const getPokemon = async () => {
      try {

          const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${routeParams.id}`);
          console.log(resp.data)
          setParamPokemonData(resp.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemon();
  }, []);




  return <>
  <section>
    {paramPokemonData.length  !=0 ? renderParamCard():""}
  </section>
  </>;
};

export default Details;
