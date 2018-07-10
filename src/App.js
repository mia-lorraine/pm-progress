import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Mia', age: 21 },
      { name: 'Ray' , age: 20 }
    ],
    otherState: 'some other value'
  }

//assigning a method to the button onclick. was called using this.switchNameHandler
switchNameHandler = (newName) => {
  // console.log('was clicked');
 this.setState({ //this changes/overwrites other state
   persons: [
     { name: newName, age: 22},
     { name: 'Ray' , age: 20 }
   ]
 })
}
//changing the name function, using state.
nameChangedHandler = (event) => {
  this.setState({ //this changes/overwrites other state
    persons: [
      { name: 'Mia Lorraine', age: 21 },
      { name: event.target.value, age: 20 }
    ]
  })
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherent',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    
    return (
      <div className="App">
      <h1>Hi, I am a react App </h1>
      <p> This is really working </p>

      <button
      style = {style}
      onClick = {this.switchNameHandler.bind(this, 'Mia!!!!!')}> Switch Names </button>
      <Person
      name ={this.state.persons[0].name}
      age ={this.state.persons[0].age}/>
      <Person
      name ={this.state.persons[1].name}
      age ={this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this, 'Max')}
      changed={this.nameChangedHandler}> My hobbies are dancing!

      </Person>
      </div>
    );
  }
}

export default App;
