import React from 'react';
import '../styles/button.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      name: '',
      date: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit(event) {
    alert('A input was submitted: ' + this.state.product + ', ' + this.state.name +', '+ this.state.date);
    event.preventDefault();
  }

render(){
    return(
      <div className ="add-button">
      <form onSubmit={this.handleSubmit} >
      <label>
        Product:
        <input type="text" value={this.state.value} name= "product" onChange={this.handleChange}/>
        Name:
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
        Date:
        <input type="text" value={this.state.date} name="date" onChange={this.handleChange} />
      </label>
      <input type="submit" value="create a project" />
      </form>
      </div>
    );
  }
}


export default Button;
