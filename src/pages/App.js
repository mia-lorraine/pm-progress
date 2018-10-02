import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Error from '../components/Error';
import Addproject from '../components/Addproject';
import Projectdetails from '../components/Projectdetails'


class App extends Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/add" component={Addproject} />
            <Route path="/project-details" component={Projectdetails} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
