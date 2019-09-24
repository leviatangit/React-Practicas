import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './CheckList/List.css';
import PersonaCard from './Clase/Props';
import Contador from './Clase/States';
import Conditional from './Clase/Condicionales';
import itemsJson from './CheckList/JsonList'
import List from './CheckList/List';
// import Lista from './Clase/Lista';


class App extends React.Component {

  render() {
    return <List items={itemsJson} />
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
