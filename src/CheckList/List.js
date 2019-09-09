import React from 'react';
import Item from './Item';

/**
 * Componente de prueba de un crud de elementos sencillos
 * 
 */


class List extends React.Component {

  constructor(props){
    super(props)
    this.state = { nombre: '' }

    setInterval(() => {
      let randomName = parseInt(Math.random() * 100000);
      this.setState({ nombre : randomName })
    }, 500);

  }

  render() {

    return (
      <div className="App-Listado">
        <ul>

          <Item
            isChecked={true}
            value={this.state.nombre}
          />

          <Item
            value={this.state.nombre}
            isChecked={false}
          />

        </ul>  
      </div>
    )
  }
}

export default List;
