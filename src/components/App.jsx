import { useState, createContext } from "react";
// import { GlobalStyle } from "Global.styled";
// import { PokemonForm } from "./PokemonForm/PokemonForm";
// import { PokemonInfo } from "./PokemonForm/PokemonInfo";
// import {ToastContainer} from 'react-toastify';
// import { Clock } from "./Clock/Clock";
// import { ComponentA } from "./useContext/ComponentA";
import { Friends } from "./Friends/Friends";

export const Color = createContext(null)

export const App = () => {
  
  const[pokemon, setPokemon] = useState(null);

 const getPokemonName=(name)=>{
  setPokemon(name)
 }

    return (
      <>
        
        <Friends/>

        {/* <Color.Provider color ="red">
          <ComponentA/>
        </Color.Provider> */}
          
      {/* <Clock/> */}

      {/* <PokemonForm onSubmit={this.getPokemonName} />
        <PokemonInfo name={this.state.pokemon} />  
      <ToastContainer
            position="top-right"
            autoClose={5000}
      /> */}
      {/* <GlobalStyle/> */}
      </>
    );
};