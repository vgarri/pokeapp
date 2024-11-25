import React from "react";
import Search from "./Home/Search/Search"
import Home from "./Home/Home";
import ListaPokemon from "./Home/ListaPokemon"
import {Route, Routes, Navigate} from 'react-router-dom';
import NewPokemonForm from "./NewPokemonForm/NewPokemonForm";
import Details from "./Details/Details";

const Main = () => {
  return <>
    <Routes>
      <Route path="/home" element={<>
      <Home/>
      </>} />
      <Route path="/new" element={<>
      <section>
      <NewPokemonForm/>
      </section>
      </>} />
      <Route path="/pokemon/:id" element={<>
      <Details/>
      </>} />
      <Route path="/*" element={<Navigate to={'/'} />} />

    </Routes>
  </>;
};

export default Main;

