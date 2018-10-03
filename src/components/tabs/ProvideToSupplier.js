import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class ProvideToSupplier extends Component {
  render() {
    return (
      <div>
       <Grid>
        <Row>
            <Col xs={3} md={3}><b>Item</b></Col>
            <Col xs={2} md={2}><b>Submitted</b></Col>
            <Col xs={2} md={2}><b>Accepted (by supplier)</b></Col>
            <Col xs={2} md={2}><b>Accepted (by B&amp;K)</b></Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Result of product evaluation</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
               <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Required functional improvements or modifications if any (specifications, features)</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Requirements for OEM version (BK version) of application (PC) software and firmware, CD labels</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
               <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>User manual (in pdf)</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
               <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Required tooling/overlay modifications if any</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Box artwork</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Initial purchase order (first articles) with detailed acceptance instructions</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Info what goes inside of box, including packaging instructions (optional)</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox><Glyphicon glyph="exclamation-sign" /></Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
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

export default ProvideToSupplier;         