import React, { Component } from 'react';
import { Button, Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import axios from 'axios';

class Promotion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promotion01a: this.props.progress.p_promotion01a,
      promotion01_review: this.props.progress.p_promotion01_review,
      promotion02a: this.props.progress.p_promotion02a,
      promotion02b: this.props.progress.p_promotion02b,
      promotion03a: this.props.progress.p_promotion03a,
      promotion03_review: this.props.progress.p_promotion03_review,
      promotion04a: this.props.progress.p_promotion04a,
      promotion05a: this.props.progress.p_promotion05a,
      promotion05_review: this.props.progress.p_promotion05_review,
      promotion05b: this.props.progress.p_promotion05b,
      promotion06a: this.props.progress.p_promotion06a,
      promotion06_review: this.props.progress.p_promotion06_review,
      promotion06b: this.props.progress.p_promotion06b,
      promotion07a: this.props.progress.p_promotion07a,
      promotion07_review: this.props.progress.p_promotion07_review,
      promotion07b: this.props.progress.p_promotion07b,
      promotion08_notes: this.props.progress.p_promotion08_notes
    }
    this.po_handleSubmit=this.po_handleSubmit.bind(this);
    this.po_handleChange=this.po_handleChange.bind(this);
    this.po_handleChange2=this.po_handleChange2.bind(this);
    this.po_handleChange3=this.po_handleChange3.bind(this);
    this.po_handleChange4=this.po_handleChange4.bind(this);
    this.po_handleChange5=this.po_handleChange5.bind(this);
    this.po_handleChange6=this.po_handleChange6.bind(this);
    this.po_handleChange7=this.po_handleChange7.bind(this);
    this.po_handleChange8=this.po_handleChange8.bind(this);
    this.po_handleChange9=this.po_handleChange9.bind(this);
    this.po_handleChange10=this.po_handleChange10.bind(this);
    this.po_handleChange11=this.po_handleChange11.bind(this);
    this.po_handleChange12=this.po_handleChange12.bind(this);
    this.po_handleChange13=this.po_handleChange13.bind(this);
    this.po_handleChange14=this.po_handleChange14.bind(this);
    this.po_handleChange15=this.po_handleChange15.bind(this);
    this.po_handleChange16=this.po_handleChange16.bind(this);
    this.po_handleChange17=this.po_handleChange17.bind(this);
    }
    po_handleChange(e) {this.setState({promotion01a: !this.state.promotion01a})}
    po_handleChange2(e) {this.setState({promotion01_review: e.target.value})}
    po_handleChange3(e) {this.setState({promotion02a: !this.state.promotion02a})}
    po_handleChange4(e) {this.setState({promotion02b: !this.state.promotion02b})}
    po_handleChange5(e) {this.setState({promotion03a: !this.state.promotion03a})}
    po_handleChange6(e) {this.setState({promotion03_review: e.target.value})}
    po_handleChange7(e) {this.setState({promotion04a: !this.state.promotion04a})}
    po_handleChange8(e) {this.setState({promotion05a: !this.state.promotion05a})}
    po_handleChange9(e) {this.setState({promotion05_review: e.target.value})}
    po_handleChange10(e) {this.setState({promotion05b: !this.state.promotion05b})}
    po_handleChange11(e) {this.setState({promotion06a: !this.state.promotion06a})}
    po_handleChange12(e) {this.setState({promotion06_review: e.target.value})}
    po_handleChange13(e) {this.setState({promotion06b: !this.state.promotion06b})}
    po_handleChange14(e) {this.setState({promotion07a: !this.state.promotion07a})}
    po_handleChange15(e) {this.setState({promotion07_review: e.target.value})}
    po_handleChange16(e) {this.setState({promotion07b: !this.state.promotion07b})}
    po_handleChange17(e) {this.setState({promotion08_notes: e.target.value })
  }
  po_handleSubmit(e) {  
    e.preventDefault(); 
        let f01 = this.state.promotion01a
        let f02 = this.state.promotion01_review
        let f03 = this.state.promotion02a
        let f04 = this.state.promotion02b
        let f05 = this.state.promotion03a
        let f06 = this.state.promotion03_review
        let f07 = this.state.promotion04a
        let f08 = this.state.promotion05a
        let f09 = this.state.promotion05_review
        let f10 = this.state.promotion05b
        let f11 = this.state.promotion06a
        let f12 = this.state.promotion06_review
        let f13 = this.state.promotion06b
        let f14 = this.state.promotion07a
        let f15 = this.state.promotion07_review
        let f16 = this.state.promotion07b
        let f17 = this.state.promotion08_notes
        axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
          p_promotion01a: f01,    
          p_promotion01_review: f02,
          p_promotion02a: f03,
          p_promotion02b: f04,
          p_promotion03a: f05,
          p_promotion03_review: f06,
          p_promotion04a: f07,
          p_promotion05a: f08,
          p_promotion05_review: f09,
          p_promotion05b: f10,
          p_promotion06a: f11,
          p_promotion06_review: f12,
          p_promotion06b: f13,
          p_promotion07a: f14,
          p_promotion07_review: f15,
          p_promotion07b: f16,
          p_promotion08_notes: f17
      })
      .then(response => {
        console.log(response.data);
      });
      f01 = f02 = f03 = f04 = f05 = f06 = f07 = f08 = f09 = f10 = f11 = f12 = f13 = f14 = f15 = f16 = f17 = ''
    }
  render() {
    return (
      <div>
        <form onSubmit={this.po_handleSubmit}>
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
              <Checkbox 
                  onChange={this.po_handleChange} 
                  checked={this.state.promotion01a}>
              </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaF01">
                  <FormControl 
                  onChange={this.po_handleChange2}
                  value={this.state.promotion01_review}
                  type="text" 
                  placeholder="Who reviewed?" 
                  />
              </FormGroup>  
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Web content management system populated?</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange3} 
                  checked={this.state.promotion02a}>
              </Checkbox>
            </Col>
            <Col xs={2} xsOffset={2} md={2} mdOffset={2}>
                <Checkbox
                    onChange={this.pr_handleChange4} 
                    checked={this.state.pricing02b}>
                    Approved by David?
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Inform Sefram (manual, data sheet, transfer price)</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange5} 
                  checked={this.state.promotion03a}>
              </Checkbox>
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaF02">
                  <FormControl 
                  onChange={this.po_handleChange6}
                  value={this.state.promotion03_review}
                  type="text" 
                  placeholder="Who reviewed?" 
                  />
              </FormGroup> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Live on website</Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.pr_handleChange7} 
                    checked={this.state.pricing04a}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Press release</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange8} 
                  checked={this.state.promotion05a}>
              </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaF03">
                  <FormControl 
                  onChange={this.po_handleChange9}
                  value={this.state.promotion05_review}
                  type="text" 
                  placeholder="Who reviewed?" 
                  />
              </FormGroup>  
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange10} 
                  checked={this.state.promotion05b}>
                  released
              </Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Internal sales training document</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange11} 
                  checked={this.state.promotion06a}>
              </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaF04">
                  <FormControl 
                  onChange={this.po_handleChange12}
                  value={this.state.promotion06_review}
                  type="text" 
                  placeholder="Who reviewed?" 
                  />
              </FormGroup>  
            </Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange13} 
                  checked={this.state.promotion06b}>
                  released
              </Checkbox> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Distributor notification email</Col>
            <Col xs={2} md={2}>
              <Checkbox 
                  onChange={this.po_handleChange14} 
                  checked={this.state.promotion07a}>
              </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
              <FormGroup controlId="formControlsTextareaF04">
                  <FormControl 
                  onChange={this.po_handleChange15}
                  value={this.state.promotion07_review}
                  type="text" 
                  placeholder="Who reviewed?" 
                  />
              </FormGroup>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.po_handleChange16}  
                    checked={this.state.promotion07b}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Section Notes:</Col>
            <Col xs={6} md={6}>
                <FormGroup controlId="formControlsTextareaE03">
                    <FormControl 
                    onChange={this.po_handleChange17}
                    value={this.state.promotion08_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
          </Row>
        </Grid>
          <Row>
            <Col xs={6} mdOffset={5}>
                <Button bsStyle="info" type= "submit" value ="Submit">Save Changes</Button>
            </Col> 
          </Row>
        </form>
      </div>
    );
  }
}

export default Promotion;