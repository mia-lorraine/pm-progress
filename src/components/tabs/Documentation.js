import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl } from 'react-bootstrap';

class Documentation extends Component {
  render() {
    return (
      <div>
       <Grid>
        <Row>
            <Col xs={3} md={3}><b>Item</b></Col>
            <Col xs={2} md={2}><b>Completed</b></Col>
            <Col xs={2} md={2}><b>Reviewed By</b></Col>
            <Col xs={2} md={2}><b>File URL</b></Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>User Manual</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox>Ayumu T.</Checkbox>
                <Checkbox>Greg V.</Checkbox>
                <Checkbox>Ryan R.</Checkbox>
                <Checkbox>Jeremy L.</Checkbox>
                <Checkbox>Jorg H.</Checkbox>
                <Checkbox>David H.</Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl componentClass="textarea" placeholder="Enter link here" />
              </FormGroup>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl componentClass="textarea" placeholder="Enter your notes here" />
              </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Data Sheet</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox>Ayumu T.</Checkbox>
                <Checkbox>Greg V.</Checkbox>
                <Checkbox>Ryan R.</Checkbox>
                <Checkbox>Jeremy L.</Checkbox>
                <Checkbox>Jorg H.</Checkbox>
                <Checkbox>David H.</Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl componentClass="textarea" placeholder="Enter link here" />
              </FormGroup>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl componentClass="textarea" placeholder="Enter your notes here" />
              </FormGroup>
            </Col>
        </Row>
        
      </Grid>
      </div>
    )
  }
}

export default Documentation;