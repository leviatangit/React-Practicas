import React from 'react';

class Item extends React.Component {
  
  render() {
    const class_ = this.props.isChecked == true ? 'checked' : 'unchecked';
    let text = this.props.value || (Math.random() * 10000);
    return (
      <li className={class_}> {text} </li>
    )
  }
}

Item.defaultProps = 
{
  isChecked : false
}


export default Item;
