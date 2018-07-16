import React, { Component } from 'react';
import Projecttable from '../components/Projecttable';
import Quickview from '../components/Quickview'
import '../styles/App.css';

let fakeServerData = {
  projectItem:  {
    id: 1,
    name: 'Mia Laurea',
    status: 'woohoo'
  },
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


class App extends Component{
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
      this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App">
        <Projecttable name={this.state.serverData.projectItem && this.state.serverData.projectItem.name}/>
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
