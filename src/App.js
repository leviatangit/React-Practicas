import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './CheckList/List.css';
import PersonaCard from './Clase/Props';
import Contador from './Clase/States';
import Conditional from './Clase/Condicionales';
<<<<<<< HEAD
import Lista from './Clase/Lista';
import listados from './CheckList/JsonList';

// console.log(listados);
=======
import itemsJson from './CheckList/JsonList'
import List from './CheckList/List';
// import Lista from './Clase/Lista';
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c


<<<<<<< HEAD
  // Condicionales
  render() {
    return <List items={listados} />
=======
class App extends React.Component {

  render() {
    return <List items={itemsJson} />
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c
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
