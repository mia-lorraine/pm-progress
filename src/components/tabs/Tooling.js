import React, { Component } from 'react';
import { Button, Row, Col, Checkbox, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import SavedChanges from './SavedChanges';

class Tooling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tooling01a: this.props.progress.p_tooling01a,
            tooling01_review: this.props.progress.p_tooling01_review,
            tooling01b: this.props.progress.p_tooling01b,
            tooling02a: this.props.progress.p_tooling02a,
            tooling02_review: this.props.progress.p_tooling02_review,
            tooling03a: this.props.progress.p_tooling03a,
            tooling03_review: this.props.progress.p_tooling03_review,
            tooling03b: this.props.progress.p_tooling03b,
            tooling04_link: this.props.progress.p_tooling04_link,
            tooling05a: this.props.progress.p_tooling05a,
            tooling05_review: this.props.progress.p_tooling05_review,
            tooling06_notes: this.props.progress.p_tooling06_notes,
            showAlert: false
        }
        this.to_handleSubmit=this.to_handleSubmit.bind(this);
        this.to_handleChange=this.to_handleChange.bind(this);
        this.to_handleChange2=this.to_handleChange2.bind(this);
        this.to_handleChange3=this.to_handleChange3.bind(this);
        this.to_handleChange4=this.to_handleChange4.bind(this);
        this.to_handleChange5=this.to_handleChange5.bind(this);
        this.to_handleChange6=this.to_handleChange6.bind(this);
        this.to_handleChange7=this.to_handleChange7.bind(this);
        this.to_handleChange8=this.to_handleChange8.bind(this);
        this.to_handleChange9=this.to_handleChange9.bind(this);
        this.to_handleChange10=this.to_handleChange10.bind(this);
        this.to_handleChange11=this.to_handleChange11.bind(this);
        this.to_handleChange12=this.to_handleChange12.bind(this);
        }
        to_handleChange(e) {this.setState({tooling01a: !this.state.tooling01a})}
        to_handleChange2(e) {this.setState({tooling01_review: e.target.value})}
        to_handleChange3(e) {this.setState({tooling01b: !this.state.tooling01b})}
        to_handleChange4(e) {this.setState({tooling02a: !this.state.tooling02a})}
        to_handleChange5(e) {this.setState({tooling02_review: e.target.value})}
        to_handleChange6(e) {this.setState({tooling03a: !this.state.tooling03a})}
        to_handleChange7(e) {this.setState({tooling03_review: e.target.value})}
        to_handleChange8(e) {this.setState({tooling03b: !this.state.tooling03b})}
        to_handleChange9(e) {this.setState({tooling04_link: e.target.value})}
        to_handleChange10(e) {this.setState({tooling05a: !this.state.tooling05a})}
        to_handleChange11(e) {this.setState({tooling05_review: e.target.value})}
        to_handleChange12(e) {this.setState({tooling06_notes: e.target.value})
        }
        to_handleSubmit(e) {  
            e.preventDefault(); 
                let d01 = this.state.tooling01a
                let d02 = this.state.tooling01_review
                let d03 = this.state.tooling01b
                let d04 = this.state.tooling02a
                let d05 = this.state.tooling02_review
                let d06 = this.state.tooling03a
                let d07 = this.state.tooling03_review
                let d08 = this.state.tooling03b
                let d09 = this.state.tooling04_link
                let d10 = this.state.tooling05a
                let d11 = this.state.tooling05_review
                let d12 = this.state.tooling06_notes
                axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                    p_tooling01a: d01,
                    p_tooling01_review: d02,
                    p_tooling01b: d03,
                    p_tooling02a: d04,
                    p_tooling02_review: d05,
                    p_tooling03a: d06,
                    p_tooling03_review: d07,
                    p_tooling03b: d08,
                    p_tooling04_link: d09,
                    p_tooling05a: d10,
                    p_tooling05_review: d11,
                    p_tooling06_notes: d12
                })
                .then(response => {
                  console.log(response.data);
                });
                d01 = d02 = d03 = d04 = d05 = d06 = d07 = d08 = d09 = d10 = d11 = d12 = ''
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
        <form onSubmit={this.to_handleSubmit}>
          <Row>
              <Col xs={3} md={3}><b>Item</b></Col>
              <Col xs={2} md={2}><b>Completed</b></Col>
              <Col xs={2} md={2}><b>Reviewed By</b></Col>
              <Col xs={2} md={2}><b>Other</b></Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Box Artwork</Col>
              <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.to_handleChange} 
                    checked={this.state.tooling01a}>
                </Checkbox>
              </Col>
              <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaD01">
                    <FormControl 
                    onChange={this.to_handleChange2}
                    value={this.state.tooling01_review}
                    type="text" 
                    placeholder="Who reviewed?" 
                    />
                </FormGroup>
              </Col>
              <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.to_handleChange3} 
                    checked={this.state.tooling01b}>
                    does not apply
                </Checkbox> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Overlay drawings</Col>
              <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.to_handleChange4} 
                    checked={this.state.tooling02a}>
                </Checkbox>
              </Col>
              <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaD02">
                    <FormControl 
                    onChange={this.to_handleChange5}
                    value={this.state.tooling02_review}
                    type="text" 
                    placeholder="Who reviewed?" 
                    />
                </FormGroup> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Tooling Instructions</Col>
              <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.to_handleChange6} 
                    checked={this.state.tooling03a}>
                </Checkbox> 
              </Col>
              <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaD03">
                    <FormControl 
                    onChange={this.to_handleChange7}
                    value={this.state.tooling03_review}
                    type="text" 
                    placeholder="Who reviewed?" 
                    />
                </FormGroup> 
              </Col>
              <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.to_handleChange8} 
                    checked={this.state.tooling03b}>
                    does not apply
                </Checkbox> 
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Tooling folder</Col>
              <Col xs={6} md={6}>
                <FormGroup controlId="formControlsTextareaD04">
                    <FormControl 
                    onChange={this.to_handleChange9}
                    value={this.state.tooling04_link}
                    type="text" 
                    placeholder="Insert Folder link here" 
                    />
                </FormGroup>
              </Col>
          </Row>
          <Row>
              <Col xs={3} md={3}>Photos (a valid B&amp;K product inventory ID must be in this system)</Col>
              <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.to_handleChange10} 
                    checked={this.state.tooling05a}>
                </Checkbox> 
              </Col>
              <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaD05">
                    <FormControl 
                    onChange={this.to_handleChange11}
                    value={this.state.tooling05_review}
                    type="text" 
                    placeholder="Who reviewed?" 
                    />
                </FormGroup> 
              </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Section Notes:</Col>
            <Col xs={6} md={6}>
                <FormGroup controlId="formControlsTextareaB06">
                    <FormControl 
                    onChange={this.to_handleChange12}
                    value={this.state.tooling06_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col xs={6} mdOffset={5}>
                <Button bsStyle="primary" type= "submit" value ="Submit">Save Changes</Button>
            </Col> 
            </Row>
          {this.state.showAlert ? <SavedChanges /> : '' }
          </form>
      </div>
    )
  }
}

export default Tooling;