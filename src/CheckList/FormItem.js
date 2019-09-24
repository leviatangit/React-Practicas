import React from 'react'


function buttonsToShow(btnsToShow)
{
  let buttons = {
    'create': <a onClick={""} key="create"> Crear </a>,
    'clean': <a key="clean"> Clean </a>,
    'edit': <a key="edit"> Edit </a>,
    'guardar': <a key="guardar"> Guardar </a>,
  }

  return btnsToShow.map((value,index) => buttons[value] );
}


class FormItem extends React.Component
{
  openToModify(e){
    let newDescripcion = "X: " + e.nativeEvent.pageX + ' Y:' + e.nativeEvent.pageY;
    this.setState({
      description : newDescripcion
    })
  }

  constructor(props){
    super(props)
    this.state = {
      description: this.props.description,
      isOpen: this.props.opened,
      buttonsActions: this.props.buttonsActions
    }
  }

  render(){
    return (
      <div className="form-item">
        <div className="input-ele">
          <input 
          className="form-control"
          value={this.state.description} 
          readOnly={this.state.isOpen} 
          />
        </div>
        <div onClick={this.openToModify.bind(this)} className="actions-button">
          {buttonsToShow(this.state.buttonsActions)}
        </div>
      </div>
    )
  }
}

FormItem.defaultProps = {
  isOpen: true,
  description: '',
  buttonsActions : ['create']
}

export default FormItem;