import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './CheckList/List.css';
import List from './CheckList/List';
import PersonaCard from './Clase/Props';
import Contador from './Clase/States';
import Conditional from './Clase/Condicionales';
import Lista from './Clase/Lista';
import listados from './CheckList/JsonList';

// console.log(listados);

class App extends React.Component {

  // Condicionales
  render() {
    return <List items={listados} />
  }

  // render(){
  //   return <Conditional />
  // }


  // State
  // render(){
  //   return <Contador 
  //   iniValue={30} 
  //   functionApply={(val) => val/* * parseInt(Math.random() * 100)*/} 
  //   numMatch={35} 
  //   />



  // Props
  // return <PersonaCard 
  //   nombre='Gabriel'
  //   apellido='Crespo'
  //   edad={10}
  //   mostrarDireccion={false}
  //   isHombre
  //   familiares={["Marlin", "Pepito", "John", "Doe"]}
  //   infoAdicional={{ telf: '0900127885' , trabajo: 'Programador web' }}
  //   direccion="San juan de los morros"
  //   procesarEdad={ (edad) => new Date().getFullYear() - edad}
  //   titulo={<h1> Titulo </h1>}
  // />
}

export default App;
