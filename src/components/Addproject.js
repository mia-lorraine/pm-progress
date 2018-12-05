import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Row, Col, FormGroup } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import '../styles/App.css';

let name, supplier, manager, date, estimatedDate, generalNotes;

class AddProject extends React.Component {
  constructor(){
    super();
    this.state = {
      show: true
    }

    this.submit=this.submit.bind(this)
  }
  
submit(e){
    e.preventDefault();
   
    this.setState({
      show: !this.state.show
    })


    axios
      .post('http://localhost:3001/projects', {
        name: name.value,
        supplier: supplier.value,
        manager: manager.value,
        date: date.value,
        estimatedDate: estimatedDate.value,
        generalNotes: generalNotes.value
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
    name.value = supplier.value = date.value = estimatedDate.value = manager.value = generalNotes.value = '';

  };

  render(){
    console.log(this.state.show)
  return (
    <div>
    <Navigation />
    {this.state.show === false 
        ? <p> Project has been submitted :) </p>
      : 
    <div className="addProjectContainer">
        <form onSubmit={this.submit}>
            <Grid>
            <Row className="name-addproject">
              <Col xs={2} md={2}><b>Project Name:</b></Col>
              <Col xs={12} sm={10} md={10}>
                <FormGroup>
                  <input
                    id = "name"
                    type = "text"
                    placeholder="Enter name"
                    ref={(input) => name = input}
                    required
                  />
                </FormGroup>
              </Col>
            </Row> 
            <Row className="supplier-addproject">
              <Col xs={2} md={2}> <b>Supplier:</b> </Col>
              <Col xs={4} sm={4} md={4}>
                <FormGroup>
                  <input
                    id="supplier"
                    type="text"
                    placeholder="Enter supplier here"
                    ref={(input) => supplier = input}
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={2} md={2}><b>Manager:</b></Col>
              <Col xs={4} sm={4} md={4}>
                <FormGroup>
                  <select ref ={(input) => manager = input}>
                    <option value='------'> --------  </option>
                    <option value='David Holt'> David Holt </option>
                    <option value='Greg VonRehder'> Greg VonRehder </option>
                    <option value='Ryan Roth'> Ryan Roth </option>
                    <option value='Jeremy Lo'> Jeremy Lo </option>
                    <option value='Jorg Hesser'> Jorg Hesser </option>
                    <option value='Ayumu Tokiwa'> Ayumu Tokiwa </option>
                    <option value='Jamie Pedersen'> Jamie Pedersen </option>
                    <option value='Aaron Fernando'> Aaron Fernando </option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} md={2}><b>Date:</b></Col>
              <Col xs={4} sm={4} md={4}>
                <FormGroup>
                  <input
                    id="name"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    ref={(input) => date = input}
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={2} md={2}><b>Estimated Completion:</b></Col>
              <Col xs={4} sm={4} md={4}>
                <FormGroup>
                  <input
                    id="estimatedCompletedDate"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    ref={(input) => estimatedDate = input}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}><b>General Notes:</b></Col>
              <Col xs={10} sm={10} md={10}>
                <FormGroup>
                  <input
                    id = "generalNotes-form"
                    type = "text"
                    placeholder="Enter general notes here"
                    ref={(input) => generalNotes = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col sm={4} md={4} smOffset={4}mdOffset={4}>
                <FormGroup>
                  <Button type="submit" bsStyle="primary" className="addSubmitButton">Submit</Button>
                </FormGroup>
              </Col>
            </Row>
         </Grid>
        </form>
      </div>
        }
        <Grid>
          <Row className="submit-addproject">
              <Col sm={4} md={4} smOffset={4}mdOffset={4}>
                <FormGroup>
                  <NavLink to='/'><Button bsStyle="info" className="backToProjectsButton">Back to Projects</Button></NavLink>
                </FormGroup>
              </Col>
            </Row>
            </Grid> 
            </div>

    );
  }
}
export default AddProject;
