import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Row, Col, FormGroup,  Modal } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import '../styles/App.css';

const AddProject = () => {
  let name, supplier, manager, date, estimatedDate, generalNotes;

  const submit = (e) => {
    e.preventDefault();

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
  return (
    <div className = "static-modal">
      <Navigation />
      <Modal.Dialog>
        <form onSubmit={submit}>
          <Grid>
            <Row className = "name-addproject">
              <Col xs={2} md={2}> <b> Project Name:</b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "name"
                    type = "text"
                    placeholder="Enter name"
                    required
                    ref={(input) => name = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "supplier-addproject">
              <Col xs={2} md={2}> <b>Supplier:</b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "supplier"
                    type = "text"
                    placeholder="Enter supplier here"
                    required
                    ref={(input) => supplier = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="manager-addproject">
              <Col xs={2} md={2}> <b>Manager:</b></Col>
              <Col xs={10} sm={7} md={4}>
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
              <Col xs={2} md={2}> <b> Date </b></Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "name"
                    type = "date"
                    placeholder="mm/dd/yyyy"
                    required
                    ref={(input) => date = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} md={2}> <b> Estimated Completed Date </b></Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "estimatedCompletedDate"
                    type = "date"
                    placeholder="mm/dd/yyyy"
                    required
                    ref={(input) => estimatedDate = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> General Notes:</b> </Col>
              <Col xs={10} sm={7} md={4}>
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
            <Row className="submit-addproject">
              <Col xs={5} md={5}>
                <FormGroup>
                  <NavLink to='/'><Button >Back to Projects</Button></NavLink>
                </FormGroup>
              </Col>
              <Col xs={5} md={5}>
                <FormGroup>
                  <Button type="submit" bsStyle="primary">Submit</Button>
                </FormGroup>
              </Col>
            </Row>
          </Grid>
        </form>
      </Modal.Dialog>
    </div>

  );
};

export default AddProject;
