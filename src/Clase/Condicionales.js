import React, { Component } from 'react';

/**
 * --------- Condicionales ---------

 */


class LoginButton extends Component {
  render() {
    return <div>
      <button> Login </button>
    </div>
  }
}

class LogoutButton extends Component {
  render() {
    return <div>
      <p>Bienvenido</p>
      <p>Cerrar sesion</p>
    </div>
  }
}

// function mostrarComponent(mostrarA){
//   if (mostrarA){
//     return <ComponentA />
//   }
//   return <ComponentB />
// }


export default class Conditional extends React.Component 
{
  constructor(){
    super()
    this.state = { userIsLogeed : false }
  }

  render() {
    return (
      <div className="ContadorComponent">
        <h1> Condicionales </h1>
        {this.state.userIsLogeed ? 
          <LogoutButton /> : 
          <LoginButton />  
        }

      </div>
    )
  }
}
