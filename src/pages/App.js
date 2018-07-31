import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Addproject from '../components/Addproject';
import Error from '../components/Error';

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
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add-project" component={Addproject} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
