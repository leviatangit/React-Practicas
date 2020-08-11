import React, {Component } from 'react';

export default class Listado extends Component {
  
  render(){
<<<<<<< HEAD
    let personas = [ "Gabriel" , "Luis" , "John" ].map( (value,index) => { return <li key={index}> {value} </li> });
    return <ul> {personas} </ul>
=======
    const personas = [ "Gabriel" , "Luis" , "John" ];

    return (
      {personas.map( function (value,index) {<p key={index}> Mi Nombre es: {value}</p>})}
    )
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c
  }
}