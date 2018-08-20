import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../styles/App.css';
import axios from 'axios';
import { Nav } from '../components/NavBar';
// import {ProjectList} from '../components/ProjectList';
import AddProject from '../components/AddProject';
import Overview from '../components/ProjectOverview'
import List from '../components/List'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
      this.addProject = this.addProject.bind(this);
  }


getData(){
axios
.get("http://localhost:3000/db")
.then(response => {
  // console.log(response);
  // console.log(response.data)
  this.setState({
    projects: response.data.projects,
  })
  })
}


addProject(newProject){
    this.setState((prevState) => {
      return {
        projects: [
          ...prevState.projects,
          newProject
        ]
      }
    });
  }   //end of first half.

countProjects(filter){
  const {projects} = this.state;
  return projects.filter(project => filter ? project.manager === filter : project).length;
}


componentDidMount() {
  this.getData();
}

  render() {
    return (
      <Router>
      <div className = "app">
      <Nav />
      <Route path="/list" render={(props) => (
                            <List
                                {...props}
                            />
        )} />
      <Route path="/add" render={(props) => (
                            <AddProject
                                {...props}
                                newProject={this.addProject}
                            />
        )} />
        <Route path="/project-details" render={(props) => (
                              <Overview
                                  {...props}
                                  newProject={this.addProject}
                              />
          )} />
        </div>
        </Router>

    );
  }
}

export default App;
