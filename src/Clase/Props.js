import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * --------- Props ---------
 * 
 * - La Props son inmutables: no se puede modificar su valor 
 * - Para definir un valor por defecto a las propiedades, se se Component.defaultProps = {};
 * 
 * 
 */


class Titulo extends React.Component {
  render() {
    return <h2> {this.props.title} </h2>
  }
}

class PersonaCard extends React.Component {
  render() {    

    const nombreCompleto = this.props.nombre + " " + this.props.apellido;

    return (
      <div className="Persona-Card">
        <p>  {this.props.edad} </p>
        <p>  {this.props.nombre} </p>
        <p>  {this.props.apellido} </p>
        <p> Nombre Completo: {nombreCompleto} </p>
        <p> {this.props.edad > 18 ? "Mayor de edad" : "Menor de edad"}</p>
      </div>
    )
  }
}

// Definir valores de la props por defecto
PersonaCard.defaultProps = {

};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Titulo
          title='Hola mundo desde props' />

        <PersonaCard
          edad="1"
          nombre={'Gabriel'}
          apellido={'Crespo'}
        />

      </header>
    </div>
  );
}

export default App;
