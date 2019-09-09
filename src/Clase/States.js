import React from 'react';

/**
 * --------- State ---------
 * - El state es donde ponemos la información del componente
 * - Para inicializar el state, podemos usar el constructor
 * - Debemos trata el state como información inmutable
 * - Solo lo podemos actualizar con setState
 * - Es asoncrono
 * - El flujo de datos de react es inidireccional, de padres a hijos
 */


class Contador extends React.Component {
  
  /* Inicializar state
    Se necesita pasarle el props al constructor y a super del constructor para poder acceder a esa propiedad 
  */
  constructor(props){   
    super(props);
    this.state = { contador : this.props.iniValue }

    let interval = setInterval(() => {
      const num = this.state.contador + 1;
      this.setState({ contador: num })

      if( this.props.numMatch == num ){
        clearInterval(interval);
        alert("Coincidencia")
      }

    }, 300 );
  }

  // Otra manera
  // state = { contador }

  render() {
    console.log(this.props);
    return (
      <div className="ContadorComponent">
        <h1> Contador </h1>
        <ContadorHijo 
          numero={this.state.contador}
          functionApply={this.props.functionApply}
        />
      </div>
    )
  }
}

Contador.defaultProps = {
  contador: 1,
  numMatch : 1
}

class ContadorHijo extends React.Component 
{
  render(){
    return <div> {this.props.functionApply(this.props.numero)} </div>
  }
}

export default Contador;
