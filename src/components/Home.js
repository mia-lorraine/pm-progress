import React from 'react';
import axios from 'axios';
import '../styles/App.css';
import { Grid, Table, Nav, NavItem, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Details from '../components/Details';
import AddProject from './Addproject';

let linkStyle = {
  color: '#0061C3',
  cursor: 'pointer'
};

let headerStyle = {
  background: '#02274d',
  color: '#fff'
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      show: false,
    };
  }
  getData() {
    axios
      .get('http://localhost:3001/projects')
      .then(res => {
        const data = res.data;
        this.setState({
          projects: data
        });
      });
  }
  showDetails = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }
  clickMe(item){
    console.log(item);
    const getId = item.id;
    const itemVal = item;
    console.log(getId);
    this.setState({
      ...this.state,
      data: itemVal,
      grabID: getId
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
          {/* <h4>Current Projects</h4> */}
          <Grid>
          <Grid>
            <Table striped bordered condensed hover>
              <thead>
                  <tr>
                    <th style={headerStyle}>Product</th>
                    <th style={headerStyle}>Manager</th>
                    <th style={headerStyle}>Date</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.projects.map((item,index) => (
                    <tr>
                      <td>
                        <a style={linkStyle} onClick={()=>{this.clickMe(item); this.showDetails();}}>{item.name}</a>
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
          />
        </div>
      </div>
    );
  }
} // End of Component

export default Home;
