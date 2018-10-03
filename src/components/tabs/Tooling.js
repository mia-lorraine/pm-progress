import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl } from 'react-bootstrap';

class Tooling extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
              <Col xs={3} md={3}><b>Item</b></Col>
              <Col xs={2} md={2}><b>Completed</b></Col>
              <Col xs={2} md={2}><b>Reviewed By</b></Col>
              <Col xs={2} md={2}><b>Other</b></Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Box Artwork</Col>
              <Col xs={2} md={2}>
                  <Checkbox></Checkbox> 
              </Col>
              <Col xs={2} md={2}>
                <FormControl 
                    type="text"
                    placeholder="Who reviewed?"> 
                </FormControl> 
              </Col>
              <Col xs={2} md={2}>
                <Checkbox>does not apply</Checkbox> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Overlay drawings</Col>
              <Col xs={2} md={2}>
                  <Checkbox></Checkbox> 
              </Col>
              <Col xs={2} md={2}>
                <FormControl 
                    type="text"
                    placeholder="Who reviewed?"> 
                </FormControl> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Tooling Instructions</Col>
              <Col xs={2} md={2}>
                  <Checkbox></Checkbox> 
              </Col>
              <Col xs={2} md={2}>
                <FormControl 
                    type="text"
                    placeholder="Who reviewed?"> 
                </FormControl> 
              </Col>
              <Col xs={2} md={2}>
                <Checkbox>does not apply</Checkbox> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Tooling folder</Col>
              <Col xs={6} md={6}>
                <FormControl 
                    type="text"
                    placeholder="Insert Folder link here"> 
                </FormControl> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Photos (a valid B&amp;K product inventory ID must be in this system)</Col>
              <Col xs={2} md={2}>
                  <Checkbox></Checkbox> 
              </Col>
              <Col xs={2} md={2}>
                <FormControl 
                    type="text"
                    placeholder="Who reviewed?"> 
                </FormControl> 
              </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Section Notes:</Col>
            <Col xs={6} md={6}>
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

export default Tooling;