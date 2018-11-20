import React from 'react';
import axios from 'axios';
import '../styles/App.css';
import { Grid, Table, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Details from '../components/Details';
import AddProject from '../components/Addproject';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      completed: [],
      show: false
    };
  }
  getData() {
    axios
      .get('http://localhost:3001/projects')
      .then(res => {
        const projects = res.data;
        this.setState({
          projects
        });
      });
    axios
      .get('http://localhost:3001/completed')
      .then(res => {
        const completed = res.data;
        this.setState({
          completed
        });
      });
    this.setState({
      show: false
    })
  }
  clickMe(item){
    const getId = item.id;
    const itemVal = item;
    this.setState({
      ...this.state,
      data: itemVal,
      grabID: getId,
      show: !this.state.show
    });
  } 
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink 
                to="/"
                onClick={(e) => {
                  this.hideDetails(e);
                  window.location.reload();
                }}>ManageBK</NavLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              <NavLink
                to="/add"
                render={(props) => (
                  <AddProject
                    {...props}
                    newProject={this.addProject}
                  />)}>Create a Project
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className='projectsContent'>
          <h4>Current Projects</h4>
          <Grid>
            <Grid>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th className="headerStyle">Product</th>
                    <th className="headerStyle">Manager</th>
                    <th className="headerStyle">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.projects.map((item,index) => (
                    <tr key={index}>
                      <td>
                        <a className="linkStyle" 
                            onClick={()=>{this.clickMe(item);
                        }}>{item.name}</a>
                      </td>
                      <td>{item.manager}</td>
                      <td>{item.date}</td>  
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Grid>
          </Grid>
          <Details
            key={this.state.projects.id}
            hideDetails={this.showDetails}
            show={this.state.show}
            data={this.state.data}
            state={this.state}
            projects={this.state.projects}
            completed={this.state.completed}
          />
          <h4>Completed Projects</h4>
          <Grid>
            <Grid>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th className="headerStyle">Product</th>
                    <th className="headerStyle">Status</th>
                    <th className="headerStyle">Date Started</th>
                    <th className="headerStyle">Date Completed / Cancelled</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.completed.map((item,index) => (
                    <tr key={index}>
                      <td>
                        <a className="linkStyle" onClick={()=>{
                          this.clickMe(item);
                        }}>{item.name}</a>
                      </td>
                      <td>
                        {item.status === 1 ? 'Completed' : 'Cancelled'}
                      </td>
                      <td>{item.date}</td>  
                      <td>{item.dateCompleted}</td>  
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
} // End of Component

export default Home;
