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
    handleChange6(e) {this.setState({supplierRequest03a: !this.state.supplierRequest03a})}
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
                let a01 = this.state.supplierRequest01a
                let a02 = this.state.supplierRequest01b
                let a03 = this.state.supplierRequest01c
                let a04 = this.state.supplierRequest01_notes
                let a05 = this.state.supplierRequest02_link
                let a06 = this.state.supplierRequest03a
                let a07 = this.state.supplierRequest03b
                let a08 = this.state.supplierRequest03c
                let a09 = this.state.supplierRequest03_notes
                let a10 = this.state.supplierRequest04a
                let a11 = this.state.supplierRequest04b
                let a12 = this.state.supplierRequest04c
                let a13 = this.state.supplierRequest04_notes
                let a14 = this.state.supplierRequest05a
                let a15 = this.state.supplierRequest05b
                let a16 = this.state.supplierRequest05c
                let a17 = this.state.supplierRequest05_notes
                let a18 = this.state.supplierRequest06a
                let a19 = this.state.supplierRequest06b
                let a20 = this.state.supplierRequest06c
                let a21 = this.state.supplierRequest06_notes
                let a22 = this.state.supplierRequest07a
                let a23 = this.state.supplierRequest07b
                let a24 = this.state.supplierRequest07c
                let a25 = this.state.supplierRequest07_notes
                let a26 = this.state.supplierRequest08a
                let a27 = this.state.supplierRequest08b
                let a28 = this.state.supplierRequest08c
                let a29 = this.state.supplierRequest08_notes
                let a30 = this.state.supplierRequest09a
                let a31 = this.state.supplierRequest09b
                let a32 = this.state.supplierRequest09c
                let a33 = this.state.supplierRequest09_notes
                let a34 = this.state.supplierRequest10a
                let a35 = this.state.supplierRequest10b
                let a36 = this.state.supplierRequest10c
                let a37 = this.state.supplierRequest10_notes
                let a38 = this.state.supplierRequest11a
                let a39 = this.state.supplierRequest11b
                let a40 = this.state.supplierRequest11c
                let a41 = this.state.supplierRequest11_notes

        axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                p_requestFromSupplier01a: a01,
                p_requestFromSupplier01b: a02,
                p_requestFromSupplier01c: a03,
                p_requestFromSupplier01_notes: a04,
                p_requestFromSupplier02_link: a05,
                p_requestFromSupplier03a: a06,
                p_requestFromSupplier03b: a07,
                p_requestFromSupplier03c: a08,
                p_requestFromSupplier03_notes: a09,
                p_requestFromSupplier04a: a10,
                p_requestFromSupplier04b: a11,
                p_requestFromSupplier04c: a12,
                p_requestFromSupplier04_notes: a13,
                p_requestFromSupplier05a: a14,
                p_requestFromSupplier05b: a15,
                p_requestFromSupplier05c: a16,
                p_requestFromSupplier05_notes: a17,
                p_requestFromSupplier06a: a18,
                p_requestFromSupplier06b: a19,
                p_requestFromSupplier06c: a20,
                p_requestFromSupplier06_notes: a21,
                p_requestFromSupplier07a: a22,
                p_requestFromSupplier07b: a23,
                p_requestFromSupplier07c: a24,
                p_requestFromSupplier07_notes: a25,
                p_requestFromSupplier08a: a26,
                p_requestFromSupplier08b: a27,
                p_requestFromSupplier08c: a28,
                p_requestFromSupplier08_notes: a29,
                p_requestFromSupplier09a: a30,
                p_requestFromSupplier09b: a31,
                p_requestFromSupplier09c: a32,
                p_requestFromSupplier09_notes: a33,
                p_requestFromSupplier10a: a34,
                p_requestFromSupplier10b: a35,
                p_requestFromSupplier10c: a36,
                p_requestFromSupplier10_notes: a37,
                p_requestFromSupplier11a: a38,
                p_requestFromSupplier11b: a39,
                p_requestFromSupplier11c: a40,
                p_requestFromSupplier11_notes: a41
              })
              .then(response => {
                console.log(response.data);
              });
              a01 = a02 = a03 = a04 = a05 = a06 = a07 = a08 = a09 = a10 =
              a11 = a12 = a13 = a14 = a15 = a16 = a17 = a18 = a19 = a20 =
              a21 = a22 = a23 = a24 = a25 = a26 = a27 = a28 = a29 = a30 =
              a31 = a32 = a33 = a34 = a35 = a36 = a37 = a38 = a39 = a40 =
              a41 = ''
            }
  render() {
    return (
      <div>
           <form onSubmit={this.handleSubmit}>
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
                <FormGroup controlId="formControlsTextarea01">
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
                <FormGroup controlId="formControlsTextarea02">
                    <FormControl 
                    onChange={this.handleChange5}
                    value={this.state.supplierRequest02_link}
                    type="text" 
                    placeholder="Eval Results Report link here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>First Articles</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange6} 
                    checked={this.state.supplierRequest03a}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange7} 
                    checked={this.state.supplierRequest03b}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange8} 
                    checked={this.state.supplierRequest03c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea03">
                    <FormControl 
                    onChange={this.handleChange9}
                    value={this.state.supplierRequest03_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row> 
            <Col xs={3} md={3}>Pricing (our cost) for instrument and included accessories</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange10} 
                    checked={this.state.supplierRequest04a}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange11} 
                    checked={this.state.supplierRequest04b}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange12} 
                    checked={this.state.supplierRequest04c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea04">
                    <FormControl 
                    onChange={this.handleChange13}
                    value={this.state.supplierRequest04_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Terms and conditions (MOQ, payment terms, prepayment of some components)</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange14} 
                    checked={this.state.supplierRequest05a}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange15} 
                    checked={this.state.supplierRequest05b}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange16} 
                    checked={this.state.supplierRequest05c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea05">
                    <FormControl 
                    onChange={this.handleChange17}
                    value={this.state.supplierRequest05_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>User manual (in word format), programming manuals, etc.</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange18} 
                    checked={this.state.supplierRequest06a}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
                 <Checkbox 
                    onChange={this.handleChange19} 
                    checked={this.state.supplierRequest06b}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange20} 
                    checked={this.state.supplierRequest06c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea06">
                    <FormControl 
                    onChange={this.handleChange21}
                    value={this.state.supplierRequest06_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Tooling: overlay drawings, IGS files</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange22} 
                    checked={this.state.supplierRequest07a}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange23} 
                    checked={this.state.supplierRequest07a}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange24} 
                    checked={this.state.supplierRequest07c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea07">
                    <FormControl 
                    onChange={this.handleChange25}
                    value={this.state.supplierRequest07_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Firmware upgrade instructions (if applicable)</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange26} 
                    checked={this.state.supplierRequest08a}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange27} 
                    checked={this.state.supplierRequest08b}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange28} 
                    checked={this.state.supplierRequest08c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea08">
                    <FormControl 
                    onChange={this.handleChange29}
                    value={this.state.supplierRequest08_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>CE declaration</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange30} 
                    checked={this.state.supplierRequest09a}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange31} 
                    checked={this.state.supplierRequest09b}>
                </Checkbox>
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange32} 
                    checked={this.state.supplierRequest09c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea09">
                    <FormControl 
                    onChange={this.handleChange33}
                    value={this.state.supplierRequest09_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Other approvals (UL, CSA, VDE...)</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange34} 
                    checked={this.state.supplierRequest10a}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange35} 
                    checked={this.state.supplierRequest10b}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.handleChange36} 
                    checked={this.state.supplierRequest10c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea10">
                    <FormControl 
                    onChange={this.handleChange37}
                    value={this.state.supplierRequest10_notes}
                    componentClass="textarea" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Service and calibration information, service strategy (e.g. board level or component level repair, does supplier provide spare parts</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange38} 
                    checked={this.state.supplierRequest11a}>
                </Checkbox>   
            </Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.handleChange39} 
                    checked={this.state.supplierRequest11b}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
            <Checkbox
                    onChange={this.handleChange40} 
                    checked={this.state.supplierRequest11c}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextarea10">
                    <FormControl 
                    onChange={this.handleChange41}
                    value={this.state.supplierRequest11_notes}
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
    )
  }
}

export default RequestFromSupplier;         