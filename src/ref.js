




-----------------------------------------------


import React, { Component } from 'react';
import './App.css';

let fakeServerData = {
  projects: {
    id: 1,
    product:'603B',
    name: 'David Holt',
    date: '05-25-2017',
    totalItems: 20,
    completedItems: 15,
    pendingItems: 5,
    status: '1'
  }
};

class Quickview extends Component {
  render () {
    return (
      <div className='projectQuickView'>
        <h1>View a Project's Details</h1>
          <p>Product: {this.props.product}</p>
          <p>Project Manager: {this.props.name}</p>
          <p>Date Initiated: {this.props.date}</p>
          <p>Total Items Pending: {this.props.pending}</p>
          <button>Complete Project</button>
          <button>Cancel Project</button>
      </div>
    )
  }
}

class App extends Component{
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App">
        <Quickview
          product={this.state.serverData.projects && this.state.serverData.projects.product}
          name={this.state.serverData.projects && this.state.serverData.projects.name}
          date={this.state.serverData.projects && this.state.serverData.projects.date}
          pending={this.state.serverData.projects && this.state.serverData.projects.pendingItems}/>
      </div>
    );
  }
}

export default App;
