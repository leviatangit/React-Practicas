import React from 'react'

class FormItem extends React.Component
{
  constructor(props){
    super(props)

    this.state.setState({
      description: this.props.description,
      opened: this.props.opened,
    })
  }

  render(){
    return (
      <div className="form-item">
        <div className="input-ele">
          <input 
          value={this.state.description} 
          {this.state.isOpen ? 'readonly=readonly' : ''} />
        </div>

        <div className="actions-button">
        </div>

      </div>
    );
  }
}

FormItem.defaultProps = {
  opened: true,
  description: '',
}