import React from 'react';
import axios from 'axios';
import '../styles/App.css';
import { Grid, Table } from 'react-bootstrap';
import Details from '../components/Details';
import Navigation from '../components/Navigation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      completed: [],
      pricing: [],
      show: false,
      count: 0
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
  getPricing() {
    axios
      .get('http://localhost:3001/pricing')
      .then(res => {
        const data = res.data;
        this.setState({
          pricing: data          
      });
    }
  )}
  // Our project is established here.
  clickMe(item){
    let getId = item.id;
    let getName = item.name
    let itemVal = item;
    this.setState({
      ...this.state,
      data: itemVal,
      selectedName: getName,
      selectedId: getId,
      show: !this.state.show
    });
    console.log(getId);
  } 

  componentDidMount() {
    this.getData();
    this.getPricing();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='projectsContent'>
          <Grid>
          <h4>Current Projects</h4>
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
            pricing={this.state.pricing}
            state={this.state}
            projects={this.state.projects}
            completed={this.state.completed}
            projectId={this.state.selectedId}
            projectName={this.state.selectedName}
          />
          <Grid>
          <h4>Completed Projects</h4>
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
