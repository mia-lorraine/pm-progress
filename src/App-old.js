import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaulttextColor = 'pink';
let defaultStyle = {
  color:defaulttextColor
}
let fakeServerData = {
  user: {
    name:'Mias'
  }
};


class Aggregate extends Component {
render() {
  return (
    <div style = {{...defaultStyle, width: '40%', display: 'inline-block'}}>
    <h2> Number Text </h2>
    </div>
  );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style = {{defaultStyle}}>
      <img/>
      <input type="text"/>
      Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style = {{...defaultStyle, display: 'inline-block',width: '25%'}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li> Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
          <li>Song 5</li>
          <li>Song 6</li>
          <li>Song 7</li>
          <li>Song 8</li>
          <li>Song 9</li>
        </ul>
      </div>

    );
  }
}
class App extends Component {
 constructor() {
   super();
  this.state = {serverData: {}}
   }
  ComponentDidMount(){
    this.setState({serverData: fakeServerData}); }
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style = {{'font-size': '50px' }}>
      {this.state.serverData.user
        && this.state.serverData.user.name} Playlist
        </h1>
      <Aggregate/>
      <Aggregate/>
      <Filter></Filter>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
 }

export default App;
