import React, {Component } from 'react';

export default class Listado extends Component {
  
  render(){
    let personas = [ "Gabriel" , "Luis" , "John" ].map( (value,index) => { return <li key={index}> {value} </li> });
    return <ul> {personas} </ul>
  }
}