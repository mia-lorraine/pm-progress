import React from 'react';
import axios from 'axios';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Row, Col, FormGroup,  Modal } from 'react-bootstrap';

const AddProject = () => {
  let name, manager, date, status;

  const submit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/projects', {
        name: name.value,
        manager: manager.value,
        date: date.value,
        status: status.value
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
    name.value = date.value = manager.value = status.value = '';
  };
  return (
    <div className = "static-modal">
      <Modal.Dialog>
        <form onSubmit={submit} className="form black-container">
          <Grid>
            <Row className = "name-addproject">
              <Col xs={2} md={2}> <b> Project Name:</b> </Col>
              <Col xs={2} md={2}>
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
            <Row className="manager-addproject">
              <Col xs={2} md={2}> <b>Manager:</b></Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <select ref ={(input) => manager = input}>
                    <option value='------'> --------  </option>
                    <option value='David Holt'> David Holt </option>
                    <option value='Greg VonRehder'> Greg VonRehder </option>
                    <option value='Ryan Roth'> Ryan Roth </option>
                    <option value='Jeremy Lo'> Jeremy Lo </option>
                    <option value='Jorg Hesser'> Jorg Hesser </option>
                    <option value='Ayumu Tokiwa'> Ayumu Tokiwa </option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} md={2}> <b> Date </b></Col>
              <Col xs={2} md={3}>
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
              <Col xs={2} md={2}><b>Type:</b></Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <select ref ={(input) => status = input} >
                    <option value='Hardware'>Hardware</option>
                    <option value='Software'>Software</option>
                  </select>
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
                  <Button type="submit" bsStyle="primary">
                Submit
                  </Button>
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
