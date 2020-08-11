import React from 'react';
import Item from './Item';
import FormItem from './FormItem';

/**
 * Componente de prueba de un crud de elementos sencillos
 * 
 */


class List extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      titleList: this.props.titleList,
      openToCreated: this.props.openToCreated,
      items: this.props.items,
    }
  }

  render() {

    return (
      <div className="App-Listado">

        {/* Item de formulario principal para crear otros */}
        {this.props.openToCreated ? <FormItem /> : ''}
        
        {/* Iteracion de items */}
<<<<<<< HEAD
        { this.state.items.map(  (value, index) => <FormItem description={value.descripcion} /> ) }
=======
        {this.state.items.map((value, index) => <FormItem description={value.descripcion} />  )}}
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c
            
      </div>
    )
  }
}

List.defaultProps = {
  openToCreated : true,
  titleList : 'loremp ipsum odlor',
}

export default List;
