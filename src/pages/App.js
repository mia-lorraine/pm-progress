import React, { Component } from 'react';
import Projecttable from '../components/Projecttable';
import Quickview from '../components/Quickview';
import Loop from '../components/loop';
import '../styles/App.css';

let fakeServerData = {
  projectItem: {
    id: 1,
    project_name: '603B',
    username: 'David Holt',
    pending: '8 actions remaining',
    date: '05-25-2017'
  },
  //{
//     id: 2,
//     project_name:'SDLk & SDLk8',
//     username: 'n/a',
//     pending: '12 Actions Pending',
//     date: '05-25-2017'
//   },
// ],
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
        <Projecttable
        project_name = {this.state.serverData.projectItem && this.state.serverData.projectItem.project_name}
        username = {this.state.serverData.projectItem && this.state.serverData.projectItem.username}
        pending = {this.state.serverData.projectItem && this.state.serverData.projectItem.pending}
        date = {this.state.serverData.projectItem && this.state.serverData.projectItem.date}/>
      <Quickview
        product={this.state.serverData.projects && this.state.serverData.projects.product}
        name={this.state.serverData.projects && this.state.serverData.projects.name}
        date={this.state.serverData.projects && this.state.serverData.projects.date}
        pending={this.state.serverData.projects && this.state.serverData.projects.pendingItems}/>
      <Loop/>


    </div>
    );
  }
}

export default App;
