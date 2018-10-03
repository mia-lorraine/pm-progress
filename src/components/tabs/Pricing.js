import React, { Component } from 'react';
import { Button, Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class Pricing extends Component {
  render() {
    return (
      <div>
       <Grid>
        <Row>
            <Col xs={3} md={3}><b>Item</b></Col>
            <Col xs={2} md={2}><b>Completed</b></Col>
            <Col xs={2} md={2}><b>Reviewed By</b></Col>
            <Col xs={2} md={2}><b>Files URL</b></Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Competitive Analysis / Pricing</Col>
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
                <FormControl 
                    type="text"
                    placeholder="Insert Files URL"> 
                </FormControl> 
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Solomon Populated</Col>
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
            <Col xs={3} md={3}>Cost and Price info approved by Jorg</Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
              <Button bsStyle="primary">Create Product</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Pricing;