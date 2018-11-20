import React, { Component } from 'react';
import { Button, Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import SavedChanges from './SavedChanges';

class Pricing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pricing01a: this.props.progress.p_pricing01a,
            pricing01_review: this.props.progress.p_pricing01_review,
            pricing01_link: this.props.progress.p_pricing01_link,
            pricing01_notes: this.props.progress.p_pricing01_notes,
            pricing02a: this.props.progress.p_pricing02a,
            pricing02_review: this.props.progress.p_pricing02_review,
            pricing03a: this.props.progress.p_pricing03a,
            getPricing: this.props.pricingData,
            showAlert: false,
       }
        this.pr_handleSubmit=this.pr_handleSubmit.bind(this);
        this.pr_handleChange=this.pr_handleChange.bind(this);
        this.pr_handleChange2=this.pr_handleChange2.bind(this);
        this.pr_handleChange3=this.pr_handleChange3.bind(this);
        this.pr_handleChange4=this.pr_handleChange4.bind(this);
        this.pr_handleChange5=this.pr_handleChange5.bind(this);
        this.pr_handleChange6=this.pr_handleChange6.bind(this);
        this.pr_handleChange7=this.pr_handleChange7.bind(this);
        }
        pr_handleChange(e) {this.setState({pricing01a: !this.state.pricing01a})}
        pr_handleChange2(e) {this.setState({pricing01_review: e.target.value})}
        pr_handleChange3(e) {this.setState({pricing01_link: e.target.value})}
        pr_handleChange4(e) {this.setState({pricing01_notes: e.target.value})}
        pr_handleChange5(e) {this.setState({pricing02a: !this.state.pricing02a})}
        pr_handleChange6(e) {this.setState({pricing02_review: e.target.value})}
        pr_handleChange7(e) {this.setState({pricing03a: !this.state.pricing03a})


        var array_data = this.props.pricingData;
        const result = array_data.filter(item => item.originID === this.props.progress.id);
        console.log(result)
        }
        pr_handleSubmit(e) {  
            e.preventDefault(); 
                let e01 = this.state.pricing01a
                let e02 = this.state.pricing01_review
                let e03 = this.state.pricing01_link
                let e04 = this.state.pricing01_notes
                let e05 = this.state.pricing02a
                let e06 = this.state.pricing02_review
                let e07 = this.state.pricing03a
                axios.patch(`http://localhost:3001/projects/${this.props.progress.id}`, {
                    p_pricing01a: e01,    
                    p_pricing01_review: e02,
                    p_pricing01_link: e03,
                    p_pricing01_notes: e04,
                    p_pricing02a: e05,
                    p_pricing02_review: e06,
                    p_pricing03a: e07
                })
                .then(response => {
                  console.log(response.data);
                });
                e01 = e02 = e03 = e04 = e05 = e06 = e07 = ''
                // Callback for Save Changes
                let showSaveAlert = () => {
                this.setState({showAlert: !this.state.showAlert});
                }
                showSaveAlert();
                setTimeout(showSaveAlert, 4000)
              }

    render() { 
        var index = 0;

        for (index = 0; index < this.props.pricingData.length; index ++){
            var pData= this.props.pricingData[index].originID
            var projectID = this.props.progress.id
            console.log(pData, projectID)
    
        }

        function isData(pricing) {
            return pricing.originID === projectID;
        }
        var data = this.props.pricingData.filter(isData);


        console.log(data)

    return (
      <div>
        <form onSubmit={this.pr_handleSubmit}>
       <Grid>
        <Row>
            <Col xs={3} md={3}><b>Item</b></Col>
            <Col xs={2} md={2}><b>Completed</b></Col>
            <Col xs={2} md={2}><b>Reviewed By</b></Col>
            <Col xs={2} md={2}><b>Files URL</b></Col>
            <Col xs={3} md={3}><b>Notes</b></Col>
        </Row>
        <Row>
            <Col xs={3} md={3}>Competitive Analysis / Pricing</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.pr_handleChange} 
                    checked={this.state.pricing01a}>
                </Checkbox> 
            </Col>
            <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaE01">
                    <FormControl 
                    onChange={this.pr_handleChange2}
                    value={this.state.pricing01_review}
                    type="text" 
                    placeholder="Who reviewed?" 
                    />
                </FormGroup> 
            </Col>
            <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaE02">
                    <FormControl 
                    onChange={this.pr_handleChange3}
                    value={this.state.pricing01_link}
                    type="text" 
                    placeholder="Insert Files URL" 
                    />
                </FormGroup>
            </Col>
            <Col xs={3} md={3}>
                <FormGroup controlId="formControlsTextareaE03">
                    <FormControl 
                    onChange={this.pr_handleChange4}
                    value={this.state.pricing01_notes}
                    type="text" 
                    placeholder="Enter your notes here" 
                    />
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Solomon Populated</Col>
            <Col xs={2} md={2}>
                <Checkbox 
                    onChange={this.pr_handleChange5} 
                    checked={this.state.pricing02a}>
                </Checkbox>  
            </Col>
            <Col xs={2} md={2}>
                <FormGroup controlId="formControlsTextareaD05">
                    <FormControl 
                    onChange={this.pr_handleChange6}
                    value={this.state.pricing02_review}
                    type="text" 
                    placeholder="Who reviewed?" 
                    />
                </FormGroup> 
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3}>Cost and Price info approved by Jorg</Col>
            <Col xs={2} md={2}>
                <Checkbox
                    onChange={this.pr_handleChange7} 
                    checked={this.state.pricing03a}>
                    <Glyphicon glyph="exclamation-sign" />
                </Checkbox>
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
              <Button bsStyle="primary">Create Product</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6} mdOffset={5}>
                <Button bsStyle="info" type= "submit" value ="Submit">Save Changes</Button>
            </Col> 
            </Row>
            <Row>
            
                {data.map((item, index) => 
                <div key = {index}> 
                <h3>BK Model Number: {item.bk_modelno} </h3>
                <li><b>Product Notes:</b> {item.product_notes} </li>
                <li><b>Vendor Model Number: </b>{item.vendor} </li>
                <li><b>Description: </b>{item.desc} </li>
                  <li><b>Direct Cost: </b>{item.direct_cost}</li>
             <li><b>Product Notes:</b> {item.product_notes}</li>
             <li><b>Country of Origin: </b>{item.country}</li>
             <li><b>US List Price: </b>{item.price} </li>
            <li><b>Price Class: </b>{item.price_class}</li>
             <li><b>Product Class: </b>{item.product_class} </li>
              <li><b>Warranty: </b>{item.warranty} </li>
             <li><b>Material Type: </b>{item.material}</li>
             <li><b>Priority Class: </b>{item.priority_class}</li>
               <li><b>Unique Serial ID #: </b>{item.serial_ID}</li>
               <li><b>AC Line Configuration:</b> {item.AC_line} </li>
                <li><b>Minimum Order Quantity:</b>{item.min_ord_qty}</li>
                <li><b>Initial Order Qty: </b>{item.ini_ord_qty}</li>        
                <li><b>First Article Arrival Date: </b>{item.arrival_date} </li>
                <li><b>First Article Quantity: </b> {item.arrival_qty}</li>
                </div>
                )}
            </Row>
        </Grid>
        {this.state.showAlert ? <SavedChanges /> : '' }
        </form>
      </div>
    )
  }
}
export default Pricing;
