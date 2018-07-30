import React, { Component } from 'react';
import Quickview from '../components/Quickview';
import Loop from '../components/Loop';
import Window from '../components/tab';
import Button from '../components/button';

import '../styles/App.css';

let fakeServerData = {
  projectItem: {
    id: 1,
    project_name: '603B',
    username: 'David Holt',
    pending: '8 actions remaining',
    date: '05-25-2017'
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

let headerDefaultStyle = {
  height: '75px',
  width: 'auto',
  backgroundColor: '#004a83'
};

let contentDefaultStyle = {
  backgroundColor: '#fafafa',
  width: '1000px',
  border: '1px solid grey',
  margin: '0 auto',
  padding: '0 20px 20px 20px'
}

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
        <div className="Header" style={headerDefaultStyle}></div>
          <div className="Content" style={contentDefaultStyle}>
        <Loop/>
      </div>

      <Quickview
        product={this.state.serverData.projects && this.state.serverData.projects.product}
        name={this.state.serverData.projects && this.state.serverData.projects.name}
        date={this.state.serverData.projects && this.state.serverData.projects.date}
        pending={this.state.serverData.projects && this.state.serverData.projects.pendingItems}/>

        <Button/>
          <div className = "tabs">
            <Window/>
            </div>
    </div>

    );
  }
}

export default App;
