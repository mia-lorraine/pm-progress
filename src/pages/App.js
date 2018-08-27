import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../styles/App.css';
import axios from 'axios';
import { Nav } from '../components/NavBar';
// import {ProjectList} from '../components/ProjectList';
import AddProject from '../components/AddProject';
import Overview from '../components/ProjectOverview'
import List from '../components/List'
import AddRedux from '../components/AddRedux'
import Tdetails from '../components/Tab'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      overview: []
    }
      this.addProject = this.addProject.bind(this);
      this.addData = this.addData.bind(this);
  }


getData(){
axios
.get("http://localhost:3000/db")
.then(response => {
  // console.log(response);
  // console.log(response.data)
  this.setState({
    projects: response.data.projects,
    overview: response.data.overview
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
  }



  addData(newData){
      this.setState((prevState) => {
        return {
          overview: [
            ...prevState.overview,
            newData
          ]
        }
      });
    }
    //end of first half.

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
        <Route path="/project-details" render={(props) => (
                                <Overview
                                    {...props}
                                    newProject={this.addProject}
                                />
            )} />
            <Route path="/tab" render={(props) => (
                                    <Tdetails
                                        {...props}
                                    />
                )} />
            <Route path="/project-overview" render={(props) => (
                                        <AddRedux
                                            {...props}
                                          newData={this.addData}
                                        />
                    )} />
        </div>
        </Router>

    );
  }
}

export default App;
