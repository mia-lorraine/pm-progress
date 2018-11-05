import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';
import axios from 'axios';

class ProvideToSupplier extends Component {
  constructor(props){
      super(props)
      this.state = {
          supplierProvide01a: this.props.progress.p_provideToSupplier01a,
          supplierProvide01b: this.props.progress.p_provideToSupplier01b,
          supplierProvide01_notes: this.props.progress.p_provideToSupplier01_notes,
          supplierProvide02a: this.props.progress.p_provideToSupplier02a,
          supplierProvide02b: this.props.progress.p_provideToSupplier02b,
          supplierProvide02c: this.props.progress.p_provideToSupplier02c,
          supplierProvide02_notes: this.props.progress.p_provideToSupplier02_notes,
          supplierProvide03a: this.props.progress.p_provideToSupplier03a,
          supplierProvide03b: this.props.progress.p_provideToSupplier03b,
          supplierProvide03c: this.props.progress.p_provideToSupplier03c,
          supplierProvide03_notes: this.props.progress.p_provideToSupplier03_notes,
          supplierProvide04a: this.props.progress.p_provideToSupplier04a,
          supplierProvide04b: this.props.progress.p_provideToSupplier04b,
          supplierProvide04c: this.props.progress.p_provideToSupplier04c,
          supplierProvide04_notes: this.props.progress.p_provideToSupplier04_notes,
          supplierProvide05a: this.props.progress.p_provideToSupplier05a,
          supplierProvide05b: this.props.progress.p_provideToSupplier05b,
          supplierProvide05c: this.props.progress.p_provideToSupplier05c,
          supplierProvide05_notes: this.props.progress.p_provideToSupplier05_notes,
          supplierProvide06a: this.props.progress.p_provideToSupplier06a,
          supplierProvide06b: this.props.progress.p_provideToSupplier06b,
          supplierProvide06c: this.props.progress.p_provideToSupplier06c,
          supplierProvide06_notes: this.props.progress.p_provideToSupplier06_notes,
          supplierProvide07a: this.props.progress.p_provideToSupplier07a,
          supplierProvide07b: this.props.progress.p_provideToSupplier07b,
          supplierProvide07c: this.props.progress.p_provideToSupplier07c,
          supplierProvide07_notes: this.props.progress.p_provideToSupplier07_notes,
          supplierProvide08a: this.props.progress.p_provideToSupplier08a,
          supplierProvide08b: this.props.progress.p_provideToSupplier08b,
          supplierProvide08c: this.props.progress.p_provideToSupplier08c,
          supplierProvide08_notes: this.props.progress.p_provideToSupplier08_notes
      }
        this.ps_handleSubmit=this.ps_handleSubmit.bind(this);
        this.ps_handleChange=this.ps_handleChange.bind(this);
        this.ps_handleChange2=this.ps_handleChange2.bind(this);
        this.ps_handleChange3=this.ps_handleChange3.bind(this);
    }
    ps_handleChange(e) {this.setState({supplierProvide01a: !this.state.supplierProvide01a})}
    ps_handleChange2(e) {this.setState({supplierProvide01b: !this.state.supplierProvide01b})}
    ps_handleChange3(e) {this.setState({supplierProvide01_notes: e.target.value})}
    
    ps_handleSubmit(e) {  
      e.preventDefault(); 
              let b01 = this.state.supplierProvide01a
              let b02 = this.state.supplierProvide01b
              let b03 = this.state.supplierProvide01_notes
              axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                p_provideToSupplier01a: b01,
                p_provideToSupplier01b: b02,
                p_provideToSupplier01_notes: b03
              })
              .then(response => {
                console.log(response.data);
              });
              b01 = b02 = b03 = ''
            }
  render() {
    return (
      <div>
        <form onSubmit={this.ps_handleSubmit}>
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
              <Checkbox 
                    onChange={this.ps_handleChange} 
                    checked={this.state.supplierProvide01a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange2} 
                    checked={this.state.supplierProvide01b}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea01">
                    <FormControl 
                    onChange={this.ps_handleChange3}
                    value={this.state.supplierProvide01_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Required functional improvements or modifications if any (specifications, features)</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange4} 
                    checked={this.state.supplierProvide02a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange5} 
                    checked={this.state.supplierProvide02b}>
              </Checkbox>
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
            </Col> p
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
          <Row>
            <Col xs={6} mdOffset={5}>
                <Button bsStyle="info" type= "submit" value ="Submit">Save Changes</Button>
            </Col> 
        </Row>
        </Grid>
        </form>
      </div>
    );
  }
}

export default ProvideToSupplier;         