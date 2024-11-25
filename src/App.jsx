import { useState } from 'react'

import './App.css'
import Main from "./components/Main"
import Header from "./components/Header"
import { context } from './context/context'
import { BrowserRouter } from 'react-router-dom'

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [createdPokemon, setCreatedPokemon] = useState([]);
  
  const updatePokemon = (newPokemon) => {
    setPokemon([...pokemon, newPokemon])
  };
  const updateCreatedPokemon = (newPokemon) => {
    setCreatedPokemon([...createdPokemon, newPokemon])
  }



  return <>
    <BrowserRouter>
    <Header/>
    <context.Provider value={{ pokemon, updatePokemon, createdPokemon, updateCreatedPokemon }}>
    
    <Main />
    </context.Provider>
    </BrowserRouter>
  </>


}

export default App
