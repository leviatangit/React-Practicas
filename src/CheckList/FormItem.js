import React from 'react'

function buttonsToShow(btnsToShow)
{
  let buttons = {
    'create': <a key="create"> Crear </a>,
    'clean': <a key="clean"> Clean </a>,
    'edit': <a key="edit"> Edit </a>,
    'guardar': <a key="guardar"> Guardar </a>,
  }

  return btnsToShow.map((value,index) => buttons[value] );
}


class FormItem extends React.Component
{
  handleClick(e){
    this.setState({
      description : new Date().getMilliseconds()
    });
    console.log("HanDle click" , e);
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
    console.log("this",this)
    return (
      <div className="form-item">
        <div className="input-ele">
          <input onClick={this.handleClick.bind(this)} className="form-control" value={this.state.description}  />
        </div>

        <div className="actions-button">
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