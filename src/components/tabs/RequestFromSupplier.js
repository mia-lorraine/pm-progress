import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';
import axios from 'axios';

class RequestFromSupplier extends Component {
    constructor(props){
        super(props)
        this.state = {
            supplierRequest01a: this.props.progress.p_requestFromSupplier01a,
            s2: this.props.progress.p_requestFromSupplier01b
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(e) {
        this.setState({
            supplierRequest01a: !this.state.supplierRequest01a,
        })
            }

    handleChange2(e) {
         this.setState({
           s2: !this.state.s2
                })
                    }

     submit(e) {  
         e.preventDefault();
         
        let r = this.state.supplierRequest01a
        let t = this.state.s2
        axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                p_requestFromSupplier01a: r,
                p_requestFromSupplier01b: t
              })
              .then(response => {
                console.log(response.data);
              });
              r = t = ''
            }
        


  render() {
    return (
      <div>
           <form onSubmit={this.submit.bind(this)}>
       <Grid>
       <Row> <Button type = " submit"  value ="Submit"> Submit information </Button> </Row>

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
           
                <Checkbox onChange={this.handleChange} checked={this.state.supplierRequest01a}>
                    </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox onChange={this.handleChange2} checked={this.state.s2}></Checkbox>
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
       </form>
      </div>
    )
  }
}

export default RequestFromSupplier;         