import React from 'react';
import { Button, Grid, Row, Col, FormGroup, FormControl, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import RequestFromSupplier from '../components/tabs/RequestFromSupplier';
import ProvideToSupplier from '../components/tabs/ProvideToSupplier';
import Documentation from '../components/tabs/Documentation';
import Tooling from '../components/tabs/Tooling';
import Pricing from '../components/tabs/Pricing';
import Promotion from '../components/tabs/Promotion';

let backdropStyle = {
  position: 'fixed',
  overflow: 'auto',
  top: 51,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20
};
let tabWrapStyle = {
  marginTop: 20
};
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      projects: [
        {
          progress: {}
        }
      ],
      pricing: []
    };
  }
  hideDetails = (e) => {
    this.props.hideDetails && this.props.hideDetails(e);
  }
  changeData(project){
    axios
      .post(`http://localhost:3001/projects/${this.props.getId}`, {
        name: project.name.value
      });
  }
  handleChange(e) {
    [e.target.name] = e.target.value;
  }
  completed(project) {
    // Delete this project from Current projects.
    const currentProjects = this.props.projects
    const selectedProject = project
    currentProjects.splice(selectedProject, 1)

    // Take the project we are passing in and add to end of Completed projects.
    const currentCompleted = this.props.completed
    currentCompleted.push(project)

    this.setState({
      projects: currentProjects,
      completed: currentCompleted
    })

    // Delete the project from current projects.
    axios.delete(`http://localhost:3001/projects/${selectedProject.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
    })

    // Post the latest completed projects list.
    const timestamp = Date.now()
    const stamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp);
      axios
      .post('http://localhost:3001/completed', {
        id: project.id,
        name: project.name,
        status: 1,
        date: project.date,
        dateCompleted: stamp
    })
      window.location.reload() // Still need to get rid of those reload.
  }
  render() {
    let project = this.props.data
    let pricing = this.props.pricing
    let tabName = "Request From Supplier"
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div style={backdropStyle}>
          <div className="backdropWrap">
              <Grid>
                <Row className="details-overview">

                  <p id="test"></p>
                  <Col xs={2} md={2}><b>Project Name:</b></Col>
                  <Col xs={2} md={2}>{project.name}</Col>
                  <Col xs={2} xsOffset={4} md={2} mdOffset={4}>
                    {/* <SaveButton bsStyle="complete" progress = {project}>Save Changes</SaveButton> */}
                  </Col>
                  <Col xs={2} md={2}>
                    <Button 
                      bsStyle="success" 
                      onClick ={(e) => {e.preventDefault();this.completed(project)}}> 
                      Complete Project
                    </Button>
                  </Col>
                </Row>
                <Row className="supplier-overview">
                  <Col xs={2} md={2}><b>Supplier:</b></Col>
                  <Col xs={2} md={2}>
                    {project.supplier}
                  </Col>                
                </Row>
                <Row className="manager-overview">
                  <Col xs={2} md={2}><b>Project Manager:</b></Col>
                  <Col xs={2} md={2}>{project.manager}</Col>
                </Row>
                <Row className="general-notes-overview">
                  <Col xs={2} md={2}><b>General Notes:</b></Col>
                  <Col xs={4} md={4}>
                    <FormGroup controlId="formControlsTextarea">
                      <FormControl componentClass="textarea" placeholder="Enter your notes here">
                        {project.generalNotes}
                      </FormControl>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="completion-overview">
                  <Col xs={2} md={2}><b>Estimated Completion: </b></Col>
                  <Col xs={2} md={2}>{project.estimatedDate}</Col>
                </Row>
              </Grid>
              <div className="tabsWrap" style={tabWrapStyle}>
                <Grid>
                  <Tabs defaultActiveKey={1} animation={false} id="project-details">
                    <Tab eventKey={1} title="Request from Supplier" style={tabWrapStyle}>
                      <RequestFromSupplier title={tabName} progress={project}/>
                    </Tab>
                    <Tab eventKey={2} title="Provide to Supplier" style={tabWrapStyle}>
                      <ProvideToSupplier progress={project}/>
                    </Tab>
                    <Tab eventKey={3} title="Documentation" style={tabWrapStyle}>
                      <Documentation progress={project}/>
                    </Tab>
                    <Tab eventKey={4} title="Tooling" style={tabWrapStyle}>
                      <Tooling progress={project}/>
                    </Tab>
                    <Tab eventKey={5} title="Pricing" style={tabWrapStyle}>
                      <Pricing progress={project} pricingData = {pricing}/>
                    </Tab>
                    <Tab eventKey={6} title="Promotion" style={tabWrapStyle}>
                      <Promotion progress={project}/>
                    </Tab>
                  </Tabs>
                </Grid>
              </div>
          </div>
        </div>
      </div>
    );
  }
} // End of Component

export default Details;
