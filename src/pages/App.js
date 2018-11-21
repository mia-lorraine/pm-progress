import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Error from '../components/Error';
import Addproject from '../components/Addproject';
import Projectdetails from '../components/Projectdetails';
import PricingForm from '../components/tabs/PricingForm';

class App extends Component{
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/add" component={Addproject} />
            <Route path="/pricing" component={PricingForm} />
            <Route path="/project-details" component={Projectdetails} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
