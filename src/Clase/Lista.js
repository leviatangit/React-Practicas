import React, {Component } from 'react';

export default class Listado extends Component {
  
  render(){
    
    const personas = [ "Gabriel" , "Luis" , "John" ];
    return (
      { personas.map( (value,index) => {<p key={index}> Mi Nombre es: {value}</p>)}}
    )
  }
}