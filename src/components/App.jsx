import { Component } from "react";
// import { GlobalStyle } from "Global.styled";
import { PokemonForm } from "./PokemonForm/PokemonForm";
import { PokemonInfo } from "./PokemonForm/PokemonInfo";
import {ToastContainer} from 'react-toastify';


export class App extends Component {
  
  state= {
    pokemon: null,
  }

 getPokemonName=(name)=>{
  this.setState({pokemon: name})
 }

  render(){
    return (
      <>
      <PokemonForm onSubmit={this.getPokemonName} />
        <PokemonInfo name={this.state.pokemon} />  
      <ToastContainer
            position="top-right"
            autoClose={5000}
      />
      {/* <GlobalStyle/> */}
      </>
    );
  }
};