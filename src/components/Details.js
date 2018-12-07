import React from 'react';
import { Button, Grid, Row, Col, FormGroup, FormControl, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import RequestFromSupplier from '../components/tabs/RequestFromSupplier';
import ProvideToSupplier from '../components/tabs/ProvideToSupplier';
import Documentation from '../components/tabs/Documentation';
import Tooling from '../components/tabs/Tooling';
import Pricing from '../components/tabs/Pricing';
import Promotion from '../components/tabs/Promotion';
import '../styles/Details.css';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      projects: [
        {
          progress: {}
        }
      ],
      pricing: [],
      selectedProject: this.props.projectName
    };
    this.showMeProject = this.showMeProject.bind(this);
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
  backToProjects() {
    window.location.reload()
  }
  showMeProject() {
    const a = this.props.projectName
    console.log(a)
  }

  render() {
    let project = this.props.data
    let pricing = this.props.pricing
    let tabName = "Request From Supplier"
  
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="projectDetails">
        <div className="detailsArea">
          <Grid>
            <Row className="details-overview">
            <p></p>
              <Col xs={2} md={2}><b>Project Name:</b></Col>
              <Col xs={2} md={2}>{project.name}</Col>
              <Col xs={2} xsOffset={4} md={2} mdOffset={4}></Col>
              <Col xs={2} md={2}>
                <Button 
                  bsStyle="success"
                  className="completeProjectButton" 
                  onClick ={(e) => {e.preventDefault();this.completed(project)}}> 
                  Complete Project
                </Button>
                <Button 
                  bsStyle="warning"
                  className="completeProjectButton" 
                  onClick={this.showMeProject}> 
                  Show Me the Project!
                </Button>
              </Col>
            </Row>
            <Row className="supplier-overview">
              <Col xs={2} md={2}><b>Supplier:</b></Col>
              <Col xs={2} md={2}>
                {project.supplier}
              </Col>
              <Col xs={2} md={2} mdOffset={10}>
                <NavLink to='/'>
                  <Button bsStyle="info" className="backToProjectsButton" onClick={this.backToProjects}>Back to Projects</Button>
                </NavLink>
              </Col>      

            </Row>
            <Row className="manager-overview">
              <Col xs={2} md={2}><b>Project Manager:</b></Col>
              <Col xs={2} md={2}>{project.manager}</Col>
            </Row>
            <br />
            <Row className="general-notes-overview">
              <Col xs={2} md={2}><b>General Notes:</b></Col>
              <Col xs={4} md={4}>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl componentClass="textarea" 
                                placeholder="Enter your notes here"
                                value={project.generalNotes}>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row className="completion-overview">
              <Col xs={2} md={2}><b>Estimated Completion: </b></Col>
              <Col xs={2} md={2}>{project.estimatedDate}</Col>
            </Row>
          </Grid>

        </div>
        <div className="tabsContainer">
          <Grid>
            <Row>
              <div className="tabsWrap">
                <Tabs defaultActiveKey={1} animation={false} id="tabs-details">
                  <Tab eventKey={1} title="Request from Supplier" className="tabsWrapInner">
                    <RequestFromSupplier title={tabName} progress={project}/>
                  </Tab>
                  <Tab eventKey={2} title="Provide to Supplier" className="tabsWrapInner">
                    <ProvideToSupplier progress={project}/>
                  </Tab>
                  <Tab eventKey={3} title="Documentation" className="tabsWrapInner">
                    <Documentation progress={project}/>
                  </Tab>
                  <Tab eventKey={4} title="Tooling" className="tabsWrapInner">
                    <Tooling progress={project}/>
                  </Tab>
                  <Tab eventKey={5} title="Pricing" className="tabsWrapInner">
                    <Pricing progress={project} pricingData={pricing} origin={this.state.selectProject}/>
                  </Tab>
                  <Tab eventKey={6} title="Promotion" className="tabsWrapInner">
                    <Promotion progress={project}/>
                  </Tab>
                </Tabs>
              </div>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
} // End of Component

export default Details;
