import React from 'react';

class Item extends React.Component {
  
  state = { isChecked : false } 

  render() {
    const className = this.state.isChecked ? this.props.classNames.checked : this.props.classNames.unchecked;    
    let text = this.props.value || (Math.random() * 10000);
    return (
      <li className={className}> {text} </li>
    )
  }
}

Item.defaultProps = 
{
  classNames : {
    checked : 'checked',
    unchecked : 'unchecked',
  }
}


export default Item;