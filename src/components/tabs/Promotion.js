import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class Promotion extends Component {
  render() {
    return (
      <div>
       <Grid>
          <Row>
              <Col xs={3} md={3}><b>Item</b></Col>
              <Col xs={2} md={2}><b>Reviewed / Completed</b></Col>
              <Col xs={2} md={2}><b>Sent / Reviewed By</b></Col>
              <Col xs={2} md={2}><b>Other</b></Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Updated selection guides and selection tool on web</Col>
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
            <Col xs={3} md={3}>Web content management system populated?</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} xsOffset={2} md={2} mdOffset={2}>
              <Checkbox>Approved by Jorg? <Glyphicon glyph="exclamation-sign" /></Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Inform Sefram (manual, data sheet, transfer price)</Col>
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
            <Col xs={3} md={3}>Live on website</Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Press release</Col>
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
                <Checkbox>released</Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Internal sales training document</Col>
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
                <Checkbox>released</Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Distributor notification email</Col>
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
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox> 
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

export default Promotion;