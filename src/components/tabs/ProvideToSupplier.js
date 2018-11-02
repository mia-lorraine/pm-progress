import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';


class ProvideToSupplier extends Component {
  constructor(props){
      super(props)
      this.state = {
          supplierProvide01a: this.props.progress.p_provideToSupplier01a,
          supplierProvide01b: this.props.progress.p_provideToSupplier01b,
          supplierProvide01c: this.props.progress.p_provideToSupplier01c,
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
      this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleChange4=this.handleChange4.bind(this);
        this.handleChange5=this.handleChange5.bind(this);
        this.handleChange6=this.handleChange6.bind(this);
        this.handleChange7=this.handleChange7.bind(this);
        this.handleChange8=this.handleChange8.bind(this);
        this.handleChange9=this.handleChange9.bind(this);
        this.handleChange10=this.handleChange10.bind(this);
        this.handleChange11=this.handleChange11.bind(this);
        this.handleChange12=this.handleChange12.bind(this);
        this.handleChange13=this.handleChange13.bind(this);
        this.handleChange14=this.handleChange14.bind(this);
        this.handleChange15=this.handleChange15.bind(this);
        this.handleChange16=this.handleChange16.bind(this);
        this.handleChange17=this.handleChange17.bind(this);
        this.handleChange18=this.handleChange18.bind(this);
        this.handleChange19=this.handleChange19.bind(this);
        this.handleChange20=this.handleChange20.bind(this);
        this.handleChange21=this.handleChange21.bind(this);
        this.handleChange22=this.handleChange22.bind(this);
        this.handleChange23=this.handleChange23.bind(this);
        this.handleChange24=this.handleChange24.bind(this);
        this.handleChange25=this.handleChange25.bind(this);
        this.handleChange26=this.handleChange26.bind(this);
        this.handleChange27=this.handleChange27.bind(this);
        this.handleChange28=this.handleChange28.bind(this);
        this.handleChange29=this.handleChange29.bind(this);
        this.handleChange30=this.handleChange30.bind(this);
        this.handleChange31=this.handleChange31.bind(this);
        this.handleChange32=this.handleChange32.bind(this);
    }
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
    );
  }
}

export default ProvideToSupplier;         