import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormControl } from 'react-bootstrap';

class RequestFromSupplier extends Component {
  render() {
    return (
      <div>
       <Grid>
        <Row>
            <Col xs={3} md={3}><b>Item</b></Col>
            <Col xs={2} md={2}><b>Requested</b></Col>
            <Col xs={2} md={2}><b>Received</b></Col>
            <Col xs={2} md={2}><b>Accepted</b></Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
        </Row>
        <Row>
            <Col xs={3} md={3}><b>Samples(s) including any software</b></Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
        </Row>
        <Row>
            <Col xs={3} md={3}><b>Link to Eval Results Report:</b></Col>
            <Col xs={9} md={9}>
                <FormControl 
                  type="text"
                  placeholder="Link goes here"> 
               </FormControl> 
            </Col>
        </Row>
       </Grid> 
      </div>
    )
  }
}

export default RequestFromSupplier;         