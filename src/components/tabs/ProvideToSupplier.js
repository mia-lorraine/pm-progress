import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';
import axios from 'axios';
import SavedChanges from './SavedChanges';

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
          supplierProvide03_notes: this.props.progress.p_provideToSupplier03_notes,
          supplierProvide04a: this.props.progress.p_provideToSupplier04a,
          supplierProvide04b: this.props.progress.p_provideToSupplier04b,
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
          supplierProvide07_notes: this.props.progress.p_provideToSupplier07_notes,
          supplierProvide08a: this.props.progress.p_provideToSupplier08a,
          supplierProvide08b: this.props.progress.p_provideToSupplier08b,
          supplierProvide08_notes: this.props.progress.p_provideToSupplier08_notes,
          showAlert: false
      }
        this.ps_handleSubmit=this.ps_handleSubmit.bind(this);
        this.ps_handleChange=this.ps_handleChange.bind(this);
        this.ps_handleChange2=this.ps_handleChange2.bind(this);
        this.ps_handleChange3=this.ps_handleChange3.bind(this);
        this.ps_handleChange4=this.ps_handleChange4.bind(this);
        this.ps_handleChange5=this.ps_handleChange5.bind(this);
        this.ps_handleChange6=this.ps_handleChange6.bind(this);
        this.ps_handleChange7=this.ps_handleChange7.bind(this);
        this.ps_handleChange8=this.ps_handleChange8.bind(this);
        this.ps_handleChange9=this.ps_handleChange9.bind(this);
        this.ps_handleChange10=this.ps_handleChange10.bind(this);
        this.ps_handleChange11=this.ps_handleChange11.bind(this);
        this.ps_handleChange12=this.ps_handleChange12.bind(this);
        this.ps_handleChange13=this.ps_handleChange13.bind(this);
        this.ps_handleChange14=this.ps_handleChange14.bind(this);
        this.ps_handleChange15=this.ps_handleChange15.bind(this);
        this.ps_handleChange16=this.ps_handleChange16.bind(this);
        this.ps_handleChange17=this.ps_handleChange17.bind(this);
        this.ps_handleChange18=this.ps_handleChange18.bind(this);
        this.ps_handleChange19=this.ps_handleChange19.bind(this);
        this.ps_handleChange20=this.ps_handleChange20.bind(this);
        this.ps_handleChange21=this.ps_handleChange21.bind(this);
        this.ps_handleChange22=this.ps_handleChange22.bind(this);
        this.ps_handleChange23=this.ps_handleChange23.bind(this);
        this.ps_handleChange24=this.ps_handleChange24.bind(this);
        this.ps_handleChange25=this.ps_handleChange25.bind(this);
        this.ps_handleChange26=this.ps_handleChange26.bind(this);
        this.ps_handleChange27=this.ps_handleChange27.bind(this);
    }
    ps_handleChange(e) {this.setState({supplierProvide01a: !this.state.supplierProvide01a})}
    ps_handleChange2(e) {this.setState({supplierProvide01b: !this.state.supplierProvide01b})}
    ps_handleChange3(e) {this.setState({supplierProvide01_notes: e.target.value})}
    ps_handleChange4(e) {this.setState({supplierProvide02a: !this.state.supplierProvide02a})}
    ps_handleChange5(e) {this.setState({supplierProvide02b: !this.state.supplierProvide02b})}
    ps_handleChange6(e) {this.setState({supplierProvide02c: !this.state.supplierProvide02c})}
    ps_handleChange7(e) {this.setState({supplierProvide02_notes: e.target.value})}
    ps_handleChange8(e) {this.setState({supplierProvide03a: !this.state.supplierProvide03a})}
    ps_handleChange9(e) {this.setState({supplierProvide03b: !this.state.supplierProvide03b})}
    ps_handleChange10(e) {this.setState({supplierProvide03_notes: e.target.value})}
    ps_handleChange11(e) {this.setState({supplierProvide04a: !this.state.supplierProvide04a})}
    ps_handleChange12(e) {this.setState({supplierProvide04b: !this.state.supplierProvide04b})}
    ps_handleChange13(e) {this.setState({supplierProvide04_notes: e.target.value})}
    ps_handleChange14(e) {this.setState({supplierProvide05a: !this.state.supplierProvide05a})}
    ps_handleChange15(e) {this.setState({supplierProvide05b: !this.state.supplierProvide05b})}
    ps_handleChange16(e) {this.setState({supplierProvide05c: !this.state.supplierProvide05c})}
    ps_handleChange17(e) {this.setState({supplierProvide05_notes: e.target.value})}
    ps_handleChange18(e) {this.setState({supplierProvide06a: !this.state.supplierProvide06a})}
    ps_handleChange19(e) {this.setState({supplierProvide06b: !this.state.supplierProvide06b})}
    ps_handleChange20(e) {this.setState({supplierProvide06c: !this.state.supplierProvide06c})}
    ps_handleChange21(e) {this.setState({supplierProvide06_notes: e.target.value})}
    ps_handleChange22(e) {this.setState({supplierProvide07a: !this.state.supplierProvide07a})}
    ps_handleChange23(e) {this.setState({supplierProvide07b: !this.state.supplierProvide07b})}
    ps_handleChange24(e) {this.setState({supplierProvide07_notes: e.target.value})}
    ps_handleChange25(e) {this.setState({supplierProvide08a: !this.state.supplierProvide08a})}
    ps_handleChange26(e) {this.setState({supplierProvide08b: !this.state.supplierProvide08b})}
    ps_handleChange27(e) {this.setState({supplierProvide08_notes: e.target.value})
    }
    ps_handleSubmit(e) {  
      e.preventDefault(); 
              let b01 = this.state.supplierProvide01a
              let b02 = this.state.supplierProvide01b
              let b03 = this.state.supplierProvide01_notes
              let b04 = this.state.supplierProvide02a
              let b05 = this.state.supplierProvide02b
              let b06 = this.state.supplierProvide02c
              let b07 = this.state.supplierProvide02_notes
              let b08 = this.state.supplierProvide03a
              let b09 = this.state.supplierProvide03b
              let b10 = this.state.supplierProvide03_notes
              let b11 = this.state.supplierProvide04a
              let b12 = this.state.supplierProvide04b
              let b13 = this.state.supplierProvide04_notes
              let b14 = this.state.supplierProvide05a
              let b15 = this.state.supplierProvide02b
              let b16 = this.state.supplierProvide05c
              let b17 = this.state.supplierProvide05_notes
              let b18 = this.state.supplierProvide06a
              let b19 = this.state.supplierProvide06b
              let b20 = this.state.supplierProvide06c
              let b21 = this.state.supplierProvide06_notes
              let b22 = this.state.supplierProvide07a
              let b23 = this.state.supplierProvide07b
              let b24 = this.state.supplierProvide07_notes
              let b25 = this.state.supplierProvide08a
              let b26 = this.state.supplierProvide08b
              let b27 = this.state.supplierProvide08_notes

              axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                p_provideToSupplier01a: b01,
                p_provideToSupplier01b: b02,
                p_provideToSupplier01_notes: b03,
                p_provideToSupplier02a: b04,
                p_provideToSupplier02b: b05,
                p_provideToSupplier02c: b06,
                p_provideToSupplier02_notes: b07,
                p_provideToSupplier03a: b08,
                p_provideToSupplier03b: b09,
                p_provideToSupplier03_notes: b10,
                p_provideToSupplier04a: b11,
                p_provideToSupplier04b: b12,
                p_provideToSupplier04_notes: b13,
                p_provideToSupplier05a: b14,
                p_provideToSupplier05b: b15,
                p_provideToSupplier05c: b16,
                p_provideToSupplier05_notes: b17,
                p_provideToSupplier06a: b18,
                p_provideToSupplier06b: b19,
                p_provideToSupplier06c: b20,
                p_provideToSupplier06_notes: b21,
                p_provideToSupplier07a: b22,
                p_provideToSupplier07b: b23,
                p_provideToSupplier07_notes: b24,
                p_provideToSupplier08a: b25,
                p_provideToSupplier08b: b26,
                p_provideToSupplier08_notes: b27
              })
              .then(response => {
                console.log(response.data);
              });
              b01 = b02 = b03 = b04 = b05 = b06 = b07 = b08 = b09 = b10 = b11 = b12 = b13 = b14 = 
              b15 = b16 = b17 = b18 = b19 = b20 = b21 = b22 = b23 = b24 = b25 = b26 = b27 = ''

              // Callback for Save Changes
              let showSaveAlert = () => {
              this.setState({showAlert: !this.state.showAlert});
              }
              showSaveAlert();
              setTimeout(showSaveAlert, 4000)
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
                <FormGroup controlId="formControlsTextareaB01">
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
              <Checkbox 
                    onChange={this.ps_handleChange6} 
                    checked={this.state.supplierProvide02c}>
              <Glyphicon glyph="exclamation-sign" /> 
              </Checkbox>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB02">
                    <FormControl 
                    onChange={this.ps_handleChange7}
                    value={this.state.supplierProvide02_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Requirements for OEM version (BK version) of application (PC) software and firmware, CD labels</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange8} 
                    checked={this.state.supplierProvide03a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange9} 
                    checked={this.state.supplierProvide03b}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB03">
                    <FormControl 
                    onChange={this.ps_handleChange10}
                    value={this.state.supplierProvide03_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>User manual (in pdf)</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange11} 
                    checked={this.state.supplierProvide04a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange12} 
                    checked={this.state.supplierProvide04b}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB04">
                    <FormControl 
                    onChange={this.ps_handleChange13}
                    value={this.state.supplierProvide04_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Required tooling/overlay modifications if any</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange14} 
                    checked={this.state.supplierProvide05a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange15} 
                    checked={this.state.supplierProvide05b}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange16} 
                    checked={this.state.supplierProvide05c}>
                <Glyphicon glyph="exclamation-sign" /> 
              </Checkbox>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB05">
                    <FormControl 
                    onChange={this.ps_handleChange17}
                    value={this.state.supplierProvide05_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Box artwork</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange18} 
                    checked={this.state.supplierProvide06a}>
              </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange19} 
                    checked={this.state.supplierProvide06b}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange20} 
                    checked={this.state.supplierProvide06c}>
                <Glyphicon glyph="exclamation-sign" /> 
              </Checkbox>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB06">
                    <FormControl 
                    onChange={this.ps_handleChange21}
                    value={this.state.supplierProvide06_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Initial purchase order (first articles) with detailed acceptance instructions</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange22} 
                    checked={this.state.supplierProvide07a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange23} 
                    checked={this.state.supplierProvide07b}>
                <Glyphicon glyph="exclamation-sign" /> 
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB07">
                    <FormControl 
                    onChange={this.ps_handleChange24}
                    value={this.state.supplierProvide07_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Info what goes inside of box, including packaging instructions (optional)</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange25} 
                    checked={this.state.supplierProvide08a}>
              </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.ps_handleChange26} 
                    checked={this.state.supplierProvide08b}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <p>N/A</p>
            </Col>
            <Col xs={3} md={3}>
             <FormGroup controlId="formControlsTextareaB08">
                    <FormControl 
                    onChange={this.ps_handleChange27}
                    value={this.state.supplierProvide08_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} mdOffset={5}>
                <Button bsStyle="info" type= "submit" value ="Submit">Save Changes</Button>
            </Col> 
          </Row>
        </Grid>
        {this.state.showAlert ? <SavedChanges /> : '' }
        </form>
      </div>
    );
  }
}

export default ProvideToSupplier;         