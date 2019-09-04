import React from 'react';
import logo from './logo.svg';
import './App.css';

// React Props

// function Hello(props)
// {
  // return <h2>  {props.title} </h2>
// }


// const Hello = (props) => { return <h2> {props.title} </h2> }

class Hello extends React.Component {
  render(){
    return <h2> { this.props.title } </h2>
  }
}

class Text extends React.Component
{
  render() {
    const nombreCompleto = this.props.nombre + " " + this.props.apellido;
    return (
      <div>
        <p>  {this.props.edad} </p>
        <p>  {this.props.nombre} </p>
        <p>  {this.props.apellido} </p>
        <p> Nombre Completo: {nombreCompleto} </p>
        <p> {this.props.edad > 18 ? "Mayor de edad" : "Menor de edad" }</p>
        
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello 
        title='Hola mundo desde props' />

        <Text
        edad="1"
        nombre={'Gabriel'}
        apellido={'Crespo'}
        />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
