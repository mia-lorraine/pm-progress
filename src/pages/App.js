import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Projectdetails from '../components/Projectdetails';
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
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/project-details" component={Projectdetails} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
