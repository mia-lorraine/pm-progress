import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home'
import Addproject from '../components/Addproject'

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

        <BrowserRouter>
          <div>
            <Route path="/" component={Home} />
          </div>
        </BrowserRouter>


    );
  }
}

export default App;
