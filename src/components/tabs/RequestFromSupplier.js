import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';
import axios from 'axios';

class RequestFromSupplier extends Component {
    constructor(props){
        super(props)
        this.state = {
            supplierRequest01a: this.props.progress.p_requestFromSupplier01a,
            supplierRequest01b: this.props.progress.p_requestFromSupplier01b,
            supplierRequest01c: this.props.progress.p_requestFromSupplier01c,
            supplierRequest01_notes: this.props.progress.p_requestFromSupplier01_notes,
            supplierRequest02_link: this.props.progress.p_requestFromSupplier02_link,
            supplierRequest03a: this.props.progress.p_requestFromSupplier03a,
            supplierRequest03b: this.props.progress.p_requestFromSupplier03b,
            supplierRequest03c: this.props.progress.p_requestFromSupplier03c,
            supplierRequest03_notes: this.props.progress.p_requestFromSupplier03_notes,
            supplierRequest04a: this.props.progress.p_requestFromSupplier04a,
            supplierRequest04b: this.props.progress.p_requestFromSupplier04b,
            supplierRequest04c: this.props.progress.p_requestFromSupplier04c,
            supplierRequest04_notes: this.props.progress.p_requestFromSupplier04_notes,
            supplierRequest05a: this.props.progress.p_requestFromSupplier05a,
            supplierRequest05b: this.props.progress.p_requestFromSupplier05b,
            supplierRequest05c: this.props.progress.p_requestFromSupplier05c,
            supplierRequest05_notes: this.props.progress.p_requestFromSupplier05_notes,
            supplierRequest06a: this.props.progress.p_requestFromSupplier06a,
            supplierRequest06b: this.props.progress.p_requestFromSupplier06b,
            supplierRequest06c: this.props.progress.p_requestFromSupplier06c,
            supplierRequest06_notes: this.props.progress.p_requestFromSupplier06_notes,
            supplierRequest07a: this.props.progress.p_requestFromSupplier07a,
            supplierRequest07b: this.props.progress.p_requestFromSupplier07b,
            supplierRequest07c: this.props.progress.p_requestFromSupplier07c,
            supplierRequest07_notes: this.props.progress.p_requestFromSupplier07_notes,
            supplierRequest08a: this.props.progress.p_requestFromSupplier08a,
            supplierRequest08b: this.props.progress.p_requestFromSupplier08b,
            supplierRequest08c: this.props.progress.p_requestFromSupplier08c,
            supplierRequest08_notes: this.props.progress.p_requestFromSupplier08_notes,
            supplierRequest09a: this.props.progress.p_requestFromSupplier09a,
            supplierRequest09b: this.props.progress.p_requestFromSupplier09b,
            supplierRequest09c: this.props.progress.p_requestFromSupplier09c,
            supplierRequest09_notes: this.props.progress.p_requestFromSupplier09_notes,
            supplierRequest10a: this.props.progress.p_requestFromSupplier10a,
            supplierRequest10b: this.props.progress.p_requestFromSupplier10b,
            supplierRequest10c: this.props.progress.p_requestFromSupplier10c,
            supplierRequest10_notes: this.props.progress.p_requestFromSupplier10_notes,
            supplierRequest11a: this.props.progress.p_requestFromSupplier11a,
            supplierRequest11b: this.props.progress.p_requestFromSupplier11b,
            supplierRequest11c: this.props.progress.p_requestFromSupplier11c,
            supplierRequest11_notes: this.props.progress.p_requestFromSupplier11_notes
        }
        // So sloppy, i know -_-
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
        this.handleChange33=this.handleChange33.bind(this);
        this.handleChange34=this.handleChange34.bind(this);
        this.handleChange35=this.handleChange35.bind(this);
        this.handleChange36=this.handleChange36.bind(this);
        this.handleChange37=this.handleChange37.bind(this);
        this.handleChange38=this.handleChange38.bind(this);
        this.handleChange39=this.handleChange39.bind(this);
        this.handleChange40=this.handleChange40.bind(this);
        this.handleChange41=this.handleChange41.bind(this);

    }
    // So sloppy, i know -_-
    handleChange(e) {this.setState({supplierRequest01a: !this.state.supplierRequest01a})}
    handleChange2(e) {this.setState({supplierRequest01b: !this.state.supplierRequest01b})}
    handleChange3(e) {this.setState({supplierRequest01c: !this.state.supplierRequest01c})}
    handleChange4(e) {this.setState({supplierRequest01_notes: e.target.value})}
    handleChange5(e) {this.setState({supplierRequest02_link: e.target.value})}
    handleChange6(e) {this.setState({supplierRequest03b: !this.state.supplierRequest03a})}
    handleChange7(e) {this.setState({supplierRequest03b: !this.state.supplierRequest03b})}
    handleChange8(e) {this.setState({supplierRequest03c: !this.state.supplierRequest03c})}
    handleChange9(e) {this.setState({supplierRequest03_notes: e.target.value})}
    handleChange10(e) {this.setState({supplierRequest04a: !this.state.supplierRequest04a})}
    handleChange11(e) {this.setState({supplierRequest04b: !this.state.supplierRequest04b})}
    handleChange12(e) {this.setState({supplierRequest04c: !this.state.supplierRequest04c})}
    handleChange13(e) {this.setState({supplierRequest04_notes: e.target.value})}
    handleChange14(e) {this.setState({supplierRequest05a: !this.state.supplierRequest05a})}
    handleChange15(e) {this.setState({supplierRequest05b: !this.state.supplierRequest05b})}
    handleChange16(e) {this.setState({supplierRequest05c: !this.state.supplierRequest05c})}
    handleChange17(e) {this.setState({supplierRequest05_notes: e.target.value})}
    handleChange18(e) {this.setState({supplierRequest06a: !this.state.supplierRequest06a})}
    handleChange19(e) {this.setState({supplierRequest06b: !this.state.supplierRequest06b})}
    handleChange20(e) {this.setState({supplierRequest06c: !this.state.supplierRequest06c})}
    handleChange21(e) {this.setState({supplierRequest06_notes: e.target.value})}
    handleChange22(e) {this.setState({supplierRequest07a: !this.state.supplierRequest07a})}
    handleChange23(e) {this.setState({supplierRequest07b: !this.state.supplierRequest07b})}
    handleChange24(e) {this.setState({supplierRequest07c: !this.state.supplierRequest07c})}
    handleChange25(e) {this.setState({supplierRequest07_notes: e.target.value})}
    handleChange26(e) {this.setState({supplierRequest08a: !this.state.supplierRequest08a})}
    handleChange27(e) {this.setState({supplierRequest08b: !this.state.supplierRequest08b})}
    handleChange28(e) {this.setState({supplierRequest08c: !this.state.supplierRequest08c})}
    handleChange29(e) {this.setState({supplierRequest08_notes: e.target.value})}
    handleChange30(e) {this.setState({supplierRequest09a: !this.state.supplierRequest09a})}
    handleChange31(e) {this.setState({supplierRequest09b: !this.state.supplierRequest09b})}
    handleChange32(e) {this.setState({supplierRequest09c: !this.state.supplierRequest09c})}
    handleChange33(e) {this.setState({supplierRequest09_notes: e.target.value})}
    handleChange34(e) {this.setState({supplierRequest10a: !this.state.supplierRequest10a})}
    handleChange35(e) {this.setState({supplierRequest10b: !this.state.supplierRequest10b})}
    handleChange36(e) {this.setState({supplierRequest10c: !this.state.supplierRequest10c})}
    handleChange37(e) {this.setState({supplierRequest10_notes: e.target.value})}
    handleChange38(e) {this.setState({supplierRequest11a: !this.state.supplierRequest11a})}
    handleChange39(e) {this.setState({supplierRequest11b: !this.state.supplierRequest11b})}
    handleChange40(e) {this.setState({supplierRequest11c: !this.state.supplierRequest11c})}
    handleChange41(e) {this.setState({supplierRequest11_notes: e.target.value})}



    handleSubmit(e) {  
        e.preventDefault(); 
                let a = this.state.supplierRequest01a
                let b = this.state.supplierRequest01b
                let c = this.state.supplierRequest01c
                let d = this.state.supplierRequest01_notes
                let e2 = this.state.supplierRequest02_link
                let f = this.state.supplierRequest03a
                let g = this.state.supplierRequest03b
                let h = this.state.supplierRequest03c
                let i = this.state.supplierRequest03_notes
                let j = this.state.supplierRequest04a
                let k = this.state.supplierRequest04b
                let l = this.state.supplierRequest04c
                let m = this.state.supplierRequest04_notes
                let n = this.state.supplierRequest05a
                let o = this.state.supplierRequest05b
                let p = this.state.supplierRequest05c
                let q = this.state.supplierRequest05_notes
                let r = this.state.supplierRequest06a
                let s = this.state.supplierRequest06b
                let t = this.state.supplierRequest06c
                let u = this.state.supplierRequest06_notes
        axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                p_requestFromSupplier01a: a,
                p_requestFromSupplier01b: b,
                p_requestFromSupplier01c: c,
                p_requestFromSupplier01_notes: d,
                p_requestFromSupplier02_link: e2,
                p_requestFromSupplier03a: f,
                p_requestFromSupplier03b: g,
                p_requestFromSupplier03c: h,
                p_requestFromSupplier03_notes: i,
                p_requestFromSupplier04a: j,
                p_requestFromSupplier04b: k,
                p_requestFromSupplier04c: l,
                p_requestFromSupplier04_notes: m,
                p_requestFromSupplier05a: n,
                p_requestFromSupplier05b: o,
                p_requestFromSupplier05c: p,
                p_requestFromSupplier05_notes: q,
                p_requestFromSupplier06a: r,
                p_requestFromSupplier06b: s,
                p_requestFromSupplier06c: t,
                p_requestFromSupplier06_notes: u
              })
              .then(response => {
                console.log(response.data);
              });
              a = b = c = d = e2 = f = g = h = i = k = l = m = n = o = p = q = r = s = t = u = ''
            }
  render() {
    return (
      <div>
           <form onSubmit={this.handleSubmit}>
       <Grid>
       <Row><Button type= "submit" value ="Submit">Submit information</Button></Row>

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
                <Checkbox 
                    onChange={this.handleChange} 
                    checked={this.state.supplierRequest01a}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange2} 
                    checked={this.state.supplierRequest01b}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange3} 
                    checked={this.state.supplierRequest01c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl 
                    onChange={this.handleChange4}
                    value={this.state.supplierRequest01_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
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