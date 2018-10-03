import React from 'react';
import { Button, Grid, Row, Col, FormGroup, FormControl, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import RequestFromSupplier from '../components/tabs/RequestFromSupplier';
import '../styles/tab.css';

let backdropStyle = {
  position: 'fixed',
  top: 51,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20
};


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      projects: []
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
  handleChange(event, project) {
    [event.target.name] = event.target.value;
  }
  render() {
    let project = this.props.data;
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div className="Header"><p>ManageBK</p></div>
        <div style={backdropStyle}>
          <form>
            <Grid>
              <Row className="details-overview">
                <Col xs={2} md={2}>Project Name:</Col>
                <Col xs={2} md={2}>{project.name}</Col>
              </Row>
              <Row className="supplier-overview">
                <Col xs={2} md={2}>Supplier:</Col>
                <Col xs={2} md={2}>
                  <FormGroup>
                    <FormControl 
                      type="text"
                      value={this.state.value}
                      placeholder="Enter text"
                      onChange={this.handleChange}>
                    </FormControl>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="manager-overview">
                <Col xs={2} md={2}>Project Manager:</Col>
                <Col xs={2} md={2}>{project.manager}</Col>
              </Row>
              <Row className="general-notes-overview">
                <Col xs={2} md={2}>General Notes:</Col>
                <Col xs={4} md={4}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>
                </Col>
              </Row>
               <Row className="completion-overview">
                <Col xs={2} md={2}>Est. Completion Date</Col>
                <Col xs={2} md={2}>{project.est_date}</Col>
              </Row>
              <Row className="manage-buttons">
                <Col xs={4} md={4}>
                  <Button bsStyle="primary">Submit</Button>
                </Col>
                <Col xs={4} md={4}>
                  <Button bsStyle="success">Complete Project</Button>
                </Col>
                <Col xs={4} md={4}>
                  <Button onClick={(e) => {
                          this.hideDetails(e);
                          window.location.reload();
                 }}>Back to Projects</Button>
                </Col>
              </Row>
              <Tabs defaultActiveKey={1} animation={false} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Request from Supplier">
                  <RequestFromSupplier />
                </Tab>
                <Tab eventKey={2} title="Provide to Supplier">
                  Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Documentation">
                  Tab 3 content
                </Tab>
                <Tab eventKey={4} title="Tooling">
                  Tab 4 content
                </Tab>
                <Tab eventKey={5} title="Pricing">
                  Tab 5 content
                </Tab>
                <Tab eventKey={6} title="Promotion">
                  Tab 6 content
                </Tab>
              </Tabs>
            </Grid>
      </form>
        </div>
      </div>
    );
  }
} // End of Component

export default Details;
