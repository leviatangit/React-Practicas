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
<<<<<<< HEAD
  handleClick(e){
    this.setState({
      description : new Date().getMilliseconds()
    });
    console.log("HanDle click" , e);
  }
  constructor(props){
    super(props)

=======
  openToModify(e){
    let newDescripcion = "X: " + e.nativeEvent.pageX + ' Y:' + e.nativeEvent.pageY;
    this.setState({
      description : newDescripcion
    })
  }

  constructor(props){
    super(props)
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c
    this.state = {
      description: this.props.description,
      isOpen: this.props.opened,
      buttonsActions: this.props.buttonsActions
    }
  }

  render(){
    console.log("this",this)
    return (
      <div className="form-item">
        <div className="input-ele">
<<<<<<< HEAD
          <input onClick={this.handleClick.bind(this)} className="form-control" value={this.state.description}  />
=======
          <input 
          className="form-control"
          value={this.state.description} 
          readOnly={this.state.isOpen} 
          />
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c
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

<<<<<<< HEAD

=======
>>>>>>> ec0bb582aaffaf2fd580f6596fa28b48a4babd8c
export default FormItem;