// import React, { Component } from 'react';
// import { Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';
// import axios from 'axios';
// import RequestFromSupplier from './RequestFromSupplier';
// import ProvideToSupplier from './ProvideToSupplier';
// import Promotion from './Promotion';
// import Documentation from './Documentation';
// import Pricing from './Pricing';

// class SaveButton extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             supplierRequest01a: this.props.progress.p_requestFromSupplier01a,
//             supplierRequest01b: this.props.progress.p_requestFromSupplier01b,
//             supplierRequest01c: this.props.progress.p_requestFromSupplier01c,
//             supplierRequest01_notes: this.props.progress.p_requestFromSupplier01_notes,
//             supplierRequest02_link: this.props.progress.p_requestFromSupplier02_link,
//             supplierRequest03a: this.props.progress.p_requestFromSupplier03a,
//             supplierRequest03b: this.props.progress.p_requestFromSupplier03b,
//             supplierRequest03c: this.props.progress.p_requestFromSupplier03c,
//             supplierRequest03_notes: this.props.progress.p_requestFromSupplier03_notes,
//             supplierRequest04a: this.props.progress.p_requestFromSupplier04a,
//             supplierRequest04b: this.props.progress.p_requestFromSupplier04b,
//             supplierRequest04c: this.props.progress.p_requestFromSupplier04c,
//             supplierRequest04_notes: this.props.progress.p_requestFromSupplier04_notes,
//             supplierRequest05a: this.props.progress.p_requestFromSupplier05a,
//             supplierRequest05b: this.props.progress.p_requestFromSupplier05b,
//             supplierRequest05c: this.props.progress.p_requestFromSupplier05c,
//             supplierRequest05_notes: this.props.progress.p_requestFromSupplier05_notes,
//             supplierRequest06a: this.props.progress.p_requestFromSupplier06a,
//             supplierRequest06b: this.props.progress.p_requestFromSupplier06b,
//             supplierRequest06c: this.props.progress.p_requestFromSupplier06c,
//             supplierRequest06_notes: this.props.progress.p_requestFromSupplier06_notes,
//             supplierRequest07a: this.props.progress.p_requestFromSupplier07a,
//             supplierRequest07b: this.props.progress.p_requestFromSupplier07b,
//             supplierRequest07c: this.props.progress.p_requestFromSupplier07c,
//             supplierRequest07_notes: this.props.progress.p_requestFromSupplier07_notes,
//             supplierRequest08a: this.props.progress.p_requestFromSupplier08a,
//             supplierRequest08b: this.props.progress.p_requestFromSupplier08b,
//             supplierRequest08c: this.props.progress.p_requestFromSupplier08c,
//             supplierRequest08_notes: this.props.progress.p_requestFromSupplier08_notes,
//             supplierRequest09a: this.props.progress.p_requestFromSupplier09a,
//             supplierRequest09b: this.props.progress.p_requestFromSupplier09b,
//             supplierRequest09c: this.props.progress.p_requestFromSupplier09c,
//             supplierRequest09_notes: this.props.progress.p_requestFromSupplier09_notes,
//             supplierRequest10a: this.props.progress.p_requestFromSupplier10a,
//             supplierRequest10b: this.props.progress.p_requestFromSupplier10b,
//             supplierRequest10c: this.props.progress.p_requestFromSupplier10c,
//             supplierRequest10_notes: this.props.progress.p_requestFromSupplier10_notes,
//             supplierRequest11a: this.props.progress.p_requestFromSupplier11a,
//             supplierRequest11b: this.props.progress.p_requestFromSupplier11b,
//             supplierRequest11c: this.props.progress.p_requestFromSupplier11c,
//             supplierRequest11_notes: this.props.progress.p_requestFromSupplier11_notes
//         }
//         this.rs_handleSubmit=this.rs_handleSubmit.bind(this);
//         this.rs_handleChange=this.rs_handleChange.bind(this);
//         this.rs_handleChange2=this.rs_handleChange2.bind(this);
//         this.rs_handleChange3=this.rs_handleChange3.bind(this);
//         this.rs_handleChange4=this.rs_handleChange4.bind(this);
//         this.rs_handleChange5=this.rs_handleChange5.bind(this);
//         this.rs_handleChange6=this.rs_handleChange6.bind(this);
//         this.rs_handleChange7=this.rs_handleChange7.bind(this);
//         this.rs_handleChange8=this.rs_handleChange8.bind(this);
//         this.rs_handleChange9=this.rs_handleChange9.bind(this);
//         this.rs_handleChange10=this.rs_handleChange10.bind(this);
//         this.rs_handleChange11=this.rs_handleChange11.bind(this);
//         this.rs_handleChange12=this.rs_handleChange12.bind(this);
//         this.rs_handleChange13=this.rs_handleChange13.bind(this);
//         this.rs_handleChange14=this.rs_handleChange14.bind(this);
//         this.rs_handleChange15=this.rs_handleChange15.bind(this);
//         this.rs_handleChange16=this.rs_handleChange16.bind(this);
//         this.rs_handleChange17=this.rs_handleChange17.bind(this);
//         this.rs_handleChange18=this.rs_handleChange18.bind(this);
//         this.rs_handleChange19=this.rs_handleChange19.bind(this);
//         this.rs_handleChange20=this.rs_handleChange20.bind(this);
//         this.rs_handleChange21=this.rs_handleChange21.bind(this);
//         this.rs_handleChange22=this.rs_handleChange22.bind(this);
//         this.rs_handleChange23=this.rs_handleChange23.bind(this);
//         this.rs_handleChange24=this.rs_handleChange24.bind(this);
//         this.rs_handleChange25=this.rs_handleChange25.bind(this);
//         this.rs_handleChange26=this.rs_handleChange26.bind(this);
//         this.rs_handleChange27=this.rs_handleChange27.bind(this);
//         this.rs_handleChange28=this.rs_handleChange28.bind(this);
//         this.rs_handleChange29=this.rs_handleChange29.bind(this);
//         this.rs_handleChange30=this.rs_handleChange30.bind(this);
//         this.rs_handleChange31=this.rs_handleChange31.bind(this);
//         this.rs_handleChange32=this.rs_handleChange32.bind(this);
//         this.rs_handleChange33=this.rs_handleChange33.bind(this);
//         this.rs_handleChange34=this.rs_handleChange34.bind(this);
//         this.rs_handleChange35=this.rs_handleChange35.bind(this);
//         this.rs_handleChange36=this.rs_handleChange36.bind(this);
//         this.rs_handleChange37=this.rs_handleChange37.bind(this);
//         this.rs_handleChange38=this.rs_handleChange38.bind(this);
//         this.rs_handleChange39=this.rs_handleChange39.bind(this);
//         this.rs_handleChange40=this.rs_handleChange40.bind(this);
//         this.rs_handleChange41=this.rs_handleChange41.bind(this);
//     }
//     rs_handleChange(e) {this.setState({supplierRequest01a: !this.state.supplierRequest01a})}
//     rs_handleChange2(e) {this.setState({supplierRequest01b: !this.state.supplierRequest01b})}
//     rs_handleChange3(e) {this.setState({supplierRequest01c: !this.state.supplierRequest01c})}
//     rs_handleChange4(e) {this.setState({supplierRequest01_notes: e.target.value})}
//     rs_handleChange5(e) {this.setState({supplierRequest02_link: e.target.value})}
//     rs_handleChange6(e) {this.setState({supplierRequest03a: !this.state.supplierRequest03a})}
//     rs_handleChange7(e) {this.setState({supplierRequest03b: !this.state.supplierRequest03b})}
//     rs_handleChange8(e) {this.setState({supplierRequest03c: !this.state.supplierRequest03c})}
//     rs_handleChange9(e) {this.setState({supplierRequest03_notes: e.target.value})}
//     rs_handleChange10(e) {this.setState({supplierRequest04a: !this.state.supplierRequest04a})}
//     rs_handleChange11(e) {this.setState({supplierRequest04b: !this.state.supplierRequest04b})}
//     rs_handleChange12(e) {this.setState({supplierRequest04c: !this.state.supplierRequest04c})}
//     rs_handleChange13(e) {this.setState({supplierRequest04_notes: e.target.value})}
//     rs_handleChange14(e) {this.setState({supplierRequest05a: !this.state.supplierRequest05a})}
//     rs_handleChange15(e) {this.setState({supplierRequest05b: !this.state.supplierRequest05b})}
//     rs_handleChange16(e) {this.setState({supplierRequest05c: !this.state.supplierRequest05c})}
//     rs_handleChange17(e) {this.setState({supplierRequest05_notes: e.target.value})}
//     rs_handleChange18(e) {this.setState({supplierRequest06a: !this.state.supplierRequest06a})}
//     rs_handleChange19(e) {this.setState({supplierRequest06b: !this.state.supplierRequest06b})}
//     rs_handleChange20(e) {this.setState({supplierRequest06c: !this.state.supplierRequest06c})}
//     rs_handleChange21(e) {this.setState({supplierRequest06_notes: e.target.value})}
//     rs_handleChange22(e) {this.setState({supplierRequest07a: !this.state.supplierRequest07a})}
//     rs_handleChange23(e) {this.setState({supplierRequest07b: !this.state.supplierRequest07b})}
//     rs_handleChange24(e) {this.setState({supplierRequest07c: !this.state.supplierRequest07c})}
//     rs_handleChange25(e) {this.setState({supplierRequest07_notes: e.target.value})}
//     rs_handleChange26(e) {this.setState({supplierRequest08a: !this.state.supplierRequest08a})}
//     rs_handleChange27(e) {this.setState({supplierRequest08b: !this.state.supplierRequest08b})}
//     rs_handleChange28(e) {this.setState({supplierRequest08c: !this.state.supplierRequest08c})}
//     rs_handleChange29(e) {this.setState({supplierRequest08_notes: e.target.value})}
//     rs_handleChange30(e) {this.setState({supplierRequest09a: !this.state.supplierRequest09a})}
//     rs_handleChange31(e) {this.setState({supplierRequest09b: !this.state.supplierRequest09b})}
//     rs_handleChange32(e) {this.setState({supplierRequest09c: !this.state.supplierRequest09c})}
//     rs_handleChange33(e) {this.setState({supplierRequest09_notes: e.target.value})}
//     rs_handleChange34(e) {this.setState({supplierRequest10a: !this.state.supplierRequest10a})}
//     rs_handleChange35(e) {this.setState({supplierRequest10b: !this.state.supplierRequest10b})}
//     rs_handleChange36(e) {this.setState({supplierRequest10c: !this.state.supplierRequest10c})}
//     rs_handleChange37(e) {this.setState({supplierRequest10_notes: e.target.value})}
//     rs_handleChange38(e) {this.setState({supplierRequest11a: !this.state.supplierRequest11a})}
//     rs_handleChange39(e) {this.setState({supplierRequest11b: !this.state.supplierRequest11b})}
//     rs_handleChange40(e) {this.setState({supplierRequest11c: !this.state.supplierRequest11c})}
//     rs_handleChange41(e) {this.setState({supplierRequest11_notes: e.target.value})
// }
    
//     rs_handleSubmit(e) {  
//         e.preventDefault(); 
//                 let a01 = this.state.supplierRequest01a
//                 let a02 = this.state.supplierRequest01b
//                 let a03 = this.state.supplierRequest01c
//                 let a04 = this.state.supplierRequest01_notes
//                 let a05 = this.state.supplierRequest02_link
//                 let a06 = this.state.supplierRequest03a
//                 let a07 = this.state.supplierRequest03b
//                 let a08 = this.state.supplierRequest03c
//                 let a09 = this.state.supplierRequest03_notes
//                 let a10 = this.state.supplierRequest04a
//                 let a11 = this.state.supplierRequest04b
//                 let a12 = this.state.supplierRequest04c
//                 let a13 = this.state.supplierRequest04_notes
//                 let a14 = this.state.supplierRequest05a
//                 let a15 = this.state.supplierRequest05b
//                 let a16 = this.state.supplierRequest05c
//                 let a17 = this.state.supplierRequest05_notes
//                 let a18 = this.state.supplierRequest06a
//                 let a19 = this.state.supplierRequest06b
//                 let a20 = this.state.supplierRequest06c
//                 let a21 = this.state.supplierRequest06_notes
//                 let a22 = this.state.supplierRequest07a
//                 let a23 = this.state.supplierRequest07b
//                 let a24 = this.state.supplierRequest07c
//                 let a25 = this.state.supplierRequest07_notes
//                 let a26 = this.state.supplierRequest08a
//                 let a27 = this.state.supplierRequest08b
//                 let a28 = this.state.supplierRequest08c
//                 let a29 = this.state.supplierRequest08_notes
//                 let a30 = this.state.supplierRequest09a
//                 let a31 = this.state.supplierRequest09b
//                 let a32 = this.state.supplierRequest09c
//                 let a33 = this.state.supplierRequest09_notes
//                 let a34 = this.state.supplierRequest10a
//                 let a35 = this.state.supplierRequest10b
//                 let a36 = this.state.supplierRequest10c
//                 let a37 = this.state.supplierRequest10_notes
//                 let a38 = this.state.supplierRequest11a
//                 let a39 = this.state.supplierRequest11b
//                 let a40 = this.state.supplierRequest11c
//                 let a41 = this.state.supplierRequest11_notes

//         axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
//                 p_requestFromSupplier01a: a01,
//                 p_requestFromSupplier01b: a02,
//                 p_requestFromSupplier01c: a03,
//                 p_requestFromSupplier01_notes: a04,
//                 p_requestFromSupplier02_link: a05,
//                 p_requestFromSupplier03a: a06,
//                 p_requestFromSupplier03b: a07,
//                 p_requestFromSupplier03c: a08,
//                 p_requestFromSupplier03_notes: a09,
//                 p_requestFromSupplier04a: a10,
//                 p_requestFromSupplier04b: a11,
//                 p_requestFromSupplier04c: a12,
//                 p_requestFromSupplier04_notes: a13,
//                 p_requestFromSupplier05a: a14,
//                 p_requestFromSupplier05b: a15,
//                 p_requestFromSupplier05c: a16,
//                 p_requestFromSupplier05_notes: a17,
//                 p_requestFromSupplier06a: a18,
//                 p_requestFromSupplier06b: a19,
//                 p_requestFromSupplier06c: a20,
//                 p_requestFromSupplier06_notes: a21,
//                 p_requestFromSupplier07a: a22,
//                 p_requestFromSupplier07b: a23,
//                 p_requestFromSupplier07c: a24,
//                 p_requestFromSupplier07_notes: a25,
//                 p_requestFromSupplier08a: a26,
//                 p_requestFromSupplier08b: a27,
//                 p_requestFromSupplier08c: a28,
//                 p_requestFromSupplier08_notes: a29,
//                 p_requestFromSupplier09a: a30,
//                 p_requestFromSupplier09b: a31,
//                 p_requestFromSupplier09c: a32,
//                 p_requestFromSupplier09_notes: a33,
//                 p_requestFromSupplier10a: a34,
//                 p_requestFromSupplier10b: a35,
//                 p_requestFromSupplier10c: a36,
//                 p_requestFromSupplier10_notes: a37,
//                 p_requestFromSupplier11a: a38,
//                 p_requestFromSupplier11b: a39,
//                 p_requestFromSupplier11c: a40,
//                 p_requestFromSupplier11_notes: a41
//               })
//               .then(response => {
//                 console.log(response.data);
//               });
//               a01 = a02 = a03 = a04 = a05 = a06 = a07 = a08 = a09 = a10 =
//               a11 = a12 = a13 = a14 = a15 = a16 = a17 = a18 = a19 = a20 =
//               a21 = a22 = a23 = a24 = a25 = a26 = a27 = a28 = a29 = a30 =
//               a31 = a32 = a33 = a34 = a35 = a36 = a37 = a38 = a39 = a40 =
//               a41 = ''
//             }

//     render(){
//     return(

//         <div>
//             <form onSubmit={this.rs_handleSubmit}>  
//             {/* <RequestFromSupplier/>
//             <ProvideToSupplier/>
//             <Promotion/>
//             <Pricing/>
//             <Documentation/> */}
//              <Button type = "submit" bsStyle = "primary" value = "Submit"> Save Project </Button>
//             </form>
//         </div>

//     )

//     }
// }
// export default SaveButton;