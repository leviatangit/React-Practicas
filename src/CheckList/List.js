import React from 'react';
import Item from './Item';

/**
 * Componente de prueba de un crud de elementos sencillos
 * 
 */


class List extends React.Component {

  render() {

    return (
      <div className="App-Listado">
        <ul>
        <Item 
          isChecked={true}
        />

        <Item
          value="Item 2"
          isChecked={false}
        />          
        </ul>  
      </div>
    )
  }
}

export default List;
