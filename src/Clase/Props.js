import React from 'react';

/**
 * --------- Props ---------
 * 
 * - Los componentes actual como funciones impuras, las props que le pasamos son inmutables: no se puede modificar su valor 
 * - Para definir un valor por defecto a las propiedades, se se Component.defaultProps = {};
 * - Cuando declaramos una propiedad pero esta no tiene valor, su valor por defecto sera true
 * - Para pasar booleanos, numero, array y objetos tiene que ser por llaves
 * - Tambien se peude pasar funciones y otros elementos
 */

 class ParrafoInfo extends React.Component {
  render(){
    return (
      <p> 
        <span className="Attributo"> {this.props.atributo} </span> 
        <span className="Valor">{this.props.valor} </span>  
      </p>
    )
  }
}

class DivInfo extends React.Component {
  render() {
    return (
      <div>
        <strong className="Attributo"> {this.props.atributo}: </strong>
        <span className="Valor">{this.props.valor} </span>
      </div>
    )
  }
}

 class PersonaCard extends React.Component {
  render() {    
    console.log( this.props );

    // Destructurar
    const {
      nombre,
      apellido, 
      mostrarDireccion,
      edad,
      direccion,
      familiares,
      infoAdicional
    } = this.props

    const nombreCompleto = nombre + " " + apellido; 
    return (
      <div className="Persona-Card">
        {this.props.titulo}
        <ParrafoInfo atributo='Nombre Completo' valor={nombreCompleto} />
        <ParrafoInfo atributo='Edad' valor={nombreCompleto} />
        <ParrafoInfo atributo='Año de nacimiento' valor={this.props.procesarEdad(edad)} />
        <ParrafoInfo atributo='Direccion' valor={direccion} />
        <ParrafoInfo atributo='Familiares' valor={familiares.join(', ')} />
        <ParrafoInfo atributo='Trabajo' valor={infoAdicional.trabajo} />
      </div>
    )
  }
}

// Definir valores de la props por defecto
PersonaCard.defaultProps = {
  mostrarDireccion: false,
  direccion : '',  
};


export default PersonaCard;
