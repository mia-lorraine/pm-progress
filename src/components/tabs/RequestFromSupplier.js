import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class RequestFromSupplier extends Component {
    constructor(props){
        super(props)
        this.state = {
            progress: this.props.progress
        }
        
        

        this.handleChange.bind(this);
    }

    

    handleChange(boolData){ 
  // console.log(boolData)  console.log("clicked")
  
    console.log(!boolData)
    this.setState({
    requestFromSupplier01a: !boolData
    })

    }
  render() {
    var boolData = this.state.progress.requestFromSupplier01a
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
            <Col xs={3} md={3}>Samples(s) including any software</Col>
            <Col xs={2} md={2}> 
            {console.log(this.state.progress)}
            
            <Checkbox onChange = {this.handleChange} checked={boolData}></Checkbox> 

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
            <Col xs={3} md={3}>Link to Eval Results Report:</Col>
            <Col xs={9} md={9}>
                <FormControl 
                  type="text"
                  placeholder="Link goes here"> 
               </FormControl> 
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>First Articles</Col>
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
            <Col xs={3} md={3}>Pricing (our cost) for instrument and included accessories</Col>
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
            <Col xs={3} md={3}>Terms and conditions (MOQ, payment terms, prepayment of some components)</Col>
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
            <Col xs={3} md={3}>User manual (in word format), programming manuals, etc.</Col>
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
            <Col xs={3} md={3}>Tooling: overlay drawings, IGS files</Col>
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
            <Col xs={3} md={3}>Firmware upgrade instructions (if applicable)</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>CE declaration</Col>
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
            <Col xs={3} md={3}>Other approvals (UL, CSA, VDE...)</Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox></Checkbox>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Enter your notes here" />
                  </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Service and calibration information, service strategy (e.g. board level or component level repair, does supplier provide spare parts</Col>
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
       </Grid> 
      </div>
    )
  }
}

export default RequestFromSupplier;         