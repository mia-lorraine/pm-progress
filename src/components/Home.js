import React from 'react';
import axios from 'axios';
import '../styles/App.css';
import { Grid, Table, ProgressBar } from 'react-bootstrap';
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
    let count1 = this.state.projects.filter(finder => finder.p_requestFromSupplier01a === true).length
    let count2 = this.state.projects.filter(finder => finder.p_requestFromSupplier01b === true).length
    let count3 = this.state.projects.filter(finder => finder.p_requestFromSupplier01c === true).length
    let count4 = this.state.projects.filter(finder => finder.p_requestFromSupplier02a === true).length
    let count5 = this.state.projects.filter(finder => finder.p_requestFromSupplier02b === true).length
    let count6 = this.state.projects.filter(finder => finder.p_requestFromSupplier02c === true).length
    let count7 = this.state.projects.filter(finder => finder.p_requestFromSupplier03a === true).length
    let count8 = this.state.projects.filter(finder => finder.p_requestFromSupplier03b === true).length
    let count9 = this.state.projects.filter(finder => finder.p_requestFromSupplier03c === true).length
    let count10 = this.state.projects.filter(finder => finder.p_requestFromSupplier04a === true).length
    let count11 = this.state.projects.filter(finder => finder.p_requestFromSupplier04b === true).length
    let count12 = this.state.projects.filter(finder => finder.p_requestFromSupplier04c === true).length
    let count13 = this.state.projects.filter(finder => finder.p_requestFromSupplier05a === true).length
    let count14 = this.state.projects.filter(finder => finder.p_requestFromSupplier05b === true).length
    let count15 = this.state.projects.filter(finder => finder.p_requestFromSupplier05c === true).length
    let count16 = this.state.projects.filter(finder => finder.p_requestFromSupplier06a === true).length
    let count17 = this.state.projects.filter(finder => finder.p_requestFromSupplier06b === true).length
    let count18 = this.state.projects.filter(finder => finder.p_requestFromSupplier06c === true).length
    let count19 = this.state.projects.filter(finder => finder.p_requestFromSupplier07a === true).length
    let count20 = this.state.projects.filter(finder => finder.p_requestFromSupplier07b === true).length
    let count21 = this.state.projects.filter(finder => finder.p_requestFromSupplier07c === true).length
    let count22 = this.state.projects.filter(finder => finder.p_requestFromSupplier08a === true).length
    let count23 = this.state.projects.filter(finder => finder.p_requestFromSupplier08b === true).length
    let count24 = this.state.projects.filter(finder => finder.p_requestFromSupplier08c === true).length
    let count25 = this.state.projects.filter(finder => finder.p_requestFromSupplier09a === true).length
    let count26 = this.state.projects.filter(finder => finder.p_requestFromSupplier09b === true).length
    let count27 = this.state.projects.filter(finder => finder.p_requestFromSupplier09c === true).length
    let count28 = this.state.projects.filter(finder => finder.p_requestFromSupplier10a === true).length
    let count29 = this.state.projects.filter(finder => finder.p_requestFromSupplier10b === true).length
    let count30 = this.state.projects.filter(finder => finder.p_requestFromSupplier10c === true).length
    let count31 = this.state.projects.filter(finder => finder.p_requestFromSupplier11a === true).length
    let count32 = this.state.projects.filter(finder => finder.p_requestFromSupplier11b === true).length
    let count33 = this.state.projects.filter(finder => finder.p_requestFromSupplier11c === true).length

var total = (count1
+count2
+count3
+count4
+count5
+count6
+count7
+count8
+count9
+count10
+count11
+count13
+count14
+count15
+count16
+count17
+count18
+count19
+count20
+count21
+count22
+count23
+count24
+count25
+count26
+count27
+count28
+count29
+count30
+count31
+count32
+count33 )
  
var requestTotal = console.log (total)
  
  

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
                    <th className="headerStyle">Progress</th>
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
                      <td> <ProgressBar bsStyle = "success" now ={requestTotal}></ProgressBar></td>
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
