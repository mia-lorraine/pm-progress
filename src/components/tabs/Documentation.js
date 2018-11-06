import React, { Component } from 'react';
import { Button, Grid, Row, Col, Checkbox, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

class Documentation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      documentation01a: this.props.progress.p_documentation01a,
      documentation01b: this.props.progress.p_documentation01b,
      documentation01c: this.props.progress.p_documentation01c,
      documentation01d: this.props.progress.p_documentation01d,
      documentation01e: this.props.progress.p_documentation01e,
      documentation01f: this.props.progress.p_documentation01f,
      documentation01g: this.props.progress.p_documentation01g,
      documentation01h: this.props.progress.p_documentation01h,
      documentation01i: this.props.progress.p_documentation01i,
      documentation01_link: this.props.progress.p_documentation01_link,
      documentation01_notes: this.props.progress.p_documentation01_notes,
      documentation02a: this.props.progress.p_documentation02a,
      documentation02b: this.props.progress.p_documentation02b,
      documentation02c: this.props.progress.p_documentation02c,
      documentation02d: this.props.progress.p_documentation02d,
      documentation02e: this.props.progress.p_documentation02e,
      documentation02f: this.props.progress.p_documentation02f,
      documentation02g: this.props.progress.p_documentation02g,
      documentation02h: this.props.progress.p_documentation02h,
      documentation02i: this.props.progress.p_documentation02i,
      documentation02_link: this.props.progress.p_documentation02_link,
      documentation02_notes: this.props.progress.p_documentation02_notes
    }
    this.do_handleSubmit=this.do_handleSubmit.bind(this);
    this.do_handleChange=this.do_handleChange.bind(this);
    this.do_handleChange2=this.do_handleChange2.bind(this);
    this.do_handleChange3=this.do_handleChange3.bind(this);
    this.do_handleChange4=this.do_handleChange4.bind(this);
    this.do_handleChange5=this.do_handleChange5.bind(this);
    this.do_handleChange6=this.do_handleChange6.bind(this);
    this.do_handleChange7=this.do_handleChange7.bind(this);
    this.do_handleChange8=this.do_handleChange8.bind(this);
    this.do_handleChange9=this.do_handleChange9.bind(this);
    this.do_handleChange10=this.do_handleChange10.bind(this);
    this.do_handleChange11=this.do_handleChange11.bind(this);
    this.do_handleChange12=this.do_handleChange12.bind(this);
    this.do_handleChange13=this.do_handleChange13.bind(this);
    this.do_handleChange14=this.do_handleChange14.bind(this);
    this.do_handleChange15=this.do_handleChange15.bind(this);
    this.do_handleChange16=this.do_handleChange16.bind(this);
    this.do_handleChange17=this.do_handleChange17.bind(this);
    this.do_handleChange18=this.do_handleChange18.bind(this);
    this.do_handleChange19=this.do_handleChange19.bind(this);
    this.do_handleChange20=this.do_handleChange20.bind(this);
    this.do_handleChange21=this.do_handleChange21.bind(this);
    this.do_handleChange22=this.do_handleChange22.bind(this);
    }
    do_handleChange(e) {this.setState({documentation01a: !this.state.documentation01a})}
    do_handleChange2(e) {this.setState({documentation01b: !this.state.documentation01b})}
    do_handleChange3(e) {this.setState({documentation01c: !this.state.documentation01c})}
    do_handleChange4(e) {this.setState({documentation01d: !this.state.documentation01d})}
    do_handleChange5(e) {this.setState({documentation01e: !this.state.documentation01e})}
    do_handleChange6(e) {this.setState({documentation01f: !this.state.documentation01f})}
    do_handleChange7(e) {this.setState({documentation01g: !this.state.documentation01g})}
    do_handleChange8(e) {this.setState({documentation01h: !this.state.documentation01h})}
    do_handleChange9(e) {this.setState({documentation01i: !this.state.documentation01i})}
    do_handleChange10(e) {this.setState({documentation01_link: e.target.value})}
    do_handleChange11(e) {this.setState({documentation01_notes: e.target.value})}
    do_handleChange12(e) {this.setState({documentation02a: !this.state.documentation02a})}
    do_handleChange13(e) {this.setState({documentation02b: !this.state.documentation02b})}
    do_handleChange14(e) {this.setState({documentation02c: !this.state.documentation02c})}
    do_handleChange15(e) {this.setState({documentation02d: !this.state.documentation02d})}
    do_handleChange16(e) {this.setState({documentation02e: !this.state.documentation02e})}
    do_handleChange17(e) {this.setState({documentation02f: !this.state.documentation02f})}
    do_handleChange18(e) {this.setState({documentation02g: !this.state.documentation02g})}
    do_handleChange19(e) {this.setState({documentation02h: !this.state.documentation02h})}
    do_handleChange20(e) {this.setState({documentation02i: !this.state.documentation02i})}
    do_handleChange21(e) {this.setState({documentation02_link: e.target.value})}
    do_handleChange22(e) {this.setState({documentation02_notes: e.target.value})}
    do_handleSubmit(e) {  
      e.preventDefault(); 
              let c01 = this.state.documentation01a
              let c02 = this.state.documentation01b
              let c03 = this.state.documentation01c
              let c04 = this.state.documentation01d
              let c05 = this.state.documentation01e
              let c06 = this.state.documentation01f
              let c07 = this.state.documentation01g
              let c08 = this.state.documentation01h
              let c09 = this.state.documentation01i
              let c10 = this.state.documentation01_link
              let c11 = this.state.documentation01_notes
              let c12 = this.state.documentation02a
              let c13 = this.state.documentation02b
              let c14 = this.state.documentation02c
              let c15 = this.state.documentation02d
              let c16 = this.state.documentation02e
              let c17 = this.state.documentation02f
              let c18 = this.state.documentation02g
              let c19 = this.state.documentation02h
              let c20 = this.state.documentation02i
              let c21 = this.state.documentation02_link
              let c22 = this.state.documentation02_notes
              axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                p_documentation01a: c01,
                p_documentation01b: c02,
                p_documentation01c: c03,
                p_documentation01d: c04,
                p_documentation01e: c05,
                p_documentation01f: c06,
                p_documentation01g: c07,
                p_documentation01h: c08,
                p_documentation01i: c09,
                p_documentation01_link: c10,
                p_documentation01_notes: c11,
                p_documentation02a: c12,
                p_documentation02b: c13,
                p_documentation02c: c14,
                p_documentation02d: c15,
                p_documentation02e: c16,
                p_documentation02f: c17,
                p_documentation02g: c18,
                p_documentation02h: c19,
                p_documentation02i: c20,
                p_documentation02_link: c21,
                p_documentation02_notes: c22
              })
              .then(response => {
                console.log(response.data);
              });
              c01 = c02 = c03 = c04 = c05 = c06 = c07 = c08 = c09 = c10 = c11 = c12 = c13 = c14 = 
              c15 = c16 = c17 = c18 = c19 = c20 = c21 = c22 = ''
            }
  render() {
    return (
      <div>
        <form onSubmit={this.do_handleSubmit}>
        <Grid>
          <Row>
            <Col xs={3} md={3}><b>Item</b></Col>
            <Col xs={2} md={2}><b>Completed</b></Col>
            <Col xs={2} md={2}><b>Reviewed By</b></Col>
            <Col xs={2} md={2}><b>File URL</b></Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>User Manual</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.do_handleChange} 
                    checked={this.state.documentation01a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox
                    onChange={this.do_handleChange2} 
                    checked={this.state.documentation01b}>
                Ayumu T.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange3} 
                    checked={this.state.documentation01c}>
                Greg V.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange4} 
                    checked={this.state.documentation01d}>
                Ryan R.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange5} 
                    checked={this.state.documentation01e}>
                Jeremy L.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange6} 
                    checked={this.state.documentation01f}>
                Jorg H.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange7} 
                    checked={this.state.documentation01g}>
                David H.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange8} 
                    checked={this.state.documentation01h}>
                Jamie P.
              </Checkbox>
              <Checkbox
                    onChange={this.do_handleChange9} 
                    checked={this.state.documentation01i}>
                Aaron F.
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaC01">
                    <FormControl 
                    onChange={this.do_handleChange10}
                    value={this.state.documentation01_link}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaC02">
                    <FormControl 
                    onChange={this.do_handleChange11}
                    value={this.state.documentation01_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Data Sheet</Col>
            <Col xs={2} md={2}>
            <Checkbox 
                    onChange={this.do_handleChange12} 
                    checked={this.state.documentation02a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                    onChange={this.do_handleChange13} 
                    checked={this.state.documentation02b}>Ayumu T.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange14} 
                    checked={this.state.documentation02c}>Greg V.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange15} 
                    checked={this.state.documentation02d}>Ryan R.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange16} 
                    checked={this.state.documentation02e}>Jeremy L.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange17} 
                    checked={this.state.documentation02f}>Jorg H.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange18} 
                    checked={this.state.documentation02g}>David H.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange19} 
                    checked={this.state.documentation02h}>Jaime P.
              </Checkbox>
              <Checkbox 
                    onChange={this.do_handleChange20} 
                    checked={this.state.documentation02i}>Aaron F.
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaB06">
                    <FormControl 
                    onChange={this.do_handleChange21}
                    value={this.state.documentation02_link}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
              </FormGroup>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsTextareaB06">
                    <FormControl 
                    onChange={this.do_handleChange22}
                    value={this.state.documentation02_notes}
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
        </form>
      </div>
    );
  }
}

export default Documentation;