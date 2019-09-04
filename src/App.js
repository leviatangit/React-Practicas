import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './CheckList/List.css';
import List from './CheckList/List';
import PersonaCard from './Clase/Props';

class App extends React.Component {
  render(){
    return <PersonaCard 
      nombre='Gabriel'
      apellido='Crespo'
      edad={10}
      mostrarDireccion={false}
      isHombre
      familiares={["Marlin", "Pepito", "John", "Doe"]}
      infoAdicional={{ telf: '0900127885' , trabajo: 'Programador web' }}
      direccion="San juan de los morros"
    />
    // return (<List />)
  }
}

export default App;
