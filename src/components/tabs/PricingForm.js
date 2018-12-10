import React  from 'react';
import axios from 'axios';
import '../../styles/App.css';
import { NavLink } from 'react-router-dom';
import { Button, Row, Col, FormGroup,  Modal } from 'react-bootstrap';

let bk_modelno, product_notes, vendor, desc, direct_cost, country, price, price_class,
product_class, warranty, material, priority_class, serial_ID, AC_line, min_ord_qty,
ini_ord_qty, arrival_date, arrival_qty;

class PricingForm extends React.Component {
  constructor(props) {
    super(props);
  }
  submit = (e) => {
    let projectOriginId = this.props.originId
    e.preventDefault();

    axios
      .post('http://localhost:3001/pricing', {
        originId: projectOriginId,
        bk_modelno: bk_modelno.value,
        product_notes: product_notes.value,
        vendor: vendor.value,
        desc: desc.value,
        direct_cost: direct_cost.value,
        country: country.value,
        price: price.value,
        price_class: price_class.value,
        product_class: product_class.value,
        warranty: warranty.value,
        material: material.value,
        priority_class: priority_class.value,
        serial_ID: serial_ID.value,
        AC_line: AC_line.value,
        min_ord_qty: min_ord_qty.value,
        ini_ord_qty: ini_ord_qty.value,
        arrival_date: arrival_date.value,
        arrival_qty: arrival_qty.value
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
    bk_modelno.value = product_notes.value = desc.value = direct_cost.value = vendor.value = country.value = price.value = price_class.value = product_class.value =
    warranty.value = material.value = priority_class.value = serial_ID.value = AC_line.value = min_ord_qty.value =
    ini_ord_qty.value = arrival_date.value = arrival_qty.value = '';
  };
  componentDidMount() {
    console.log(this.props.originName)
  }
  render(){
  return (
    <div className="pricingModalForm">
        <form onSubmit={this.submit}>
            <Row>
              <Col xs={1} md={1}><b>Parent Series / Project:</b></Col>
              <Col xs={4} md={4}> {this.props.originName}</Col>
            </Row>
            <Row className="name-addproject">
              <Col xs={2} sm={1} md={1}> <b> BK Model Number:</b> </Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id = "name"
                    type = "text"
                    placeholder="Enter model name"
                    required
                    ref={(input) => bk_modelno = input}
                  />
                </FormGroup>
              </Col>
            <Col xs={2} sm={1} md={1}> <b> Vendor Model Number: </b></Col>
              <Col xs={4} md={4}>
                 <FormGroup>
                  <input
                    id = "vendor"
                    type = "text"
                    placeholder="Enter vendor number"
                    required
                    ref={(input) => vendor = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col xs={2} sm={1} md={1}><b>Description</b></Col>
              <Col xs={9} md={9}>
                <FormGroup>
                  <input
                    id = "name"
                    type = "text"
                    placeholder="Enter description"
                    required
                    ref={(input) => desc = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} sm={1} md={1}> <b>Supplier:</b> </Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id = "supplier"
                    type = "text"
                    placeholder="Enter supplier"
                    required
                    ref={(input) => product_notes = input}
                  />
                </FormGroup>
              </Col>
            <Col xs={2} sm={1} md={1}> <b> Direct Cost </b></Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id = "direct_cost"
                    type = "text"
                    placeholder="Enter cost"
                    required
                    ref={(input) => direct_cost = input}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col xs={2} sm={1} md={1}> <b> Country:</b> </Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id="country"
                    type="text"
                    placeholder="Enter country"
                    ref={(input) => country = input}
                  />
                </FormGroup>
              </Col>
              
              <Col xs={2} sm={1} md={1}> <b> Price: </b> </Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id = "price"
                    type = "text"
                    placeholder="Enter price"
                    ref={(input) => price = input}
                  />
                </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col xs={2} sm={1} md={1}> <b> Price Class: </b> </Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Price Class"
                    ref={(input) => price_class = input}
                  />
                </FormGroup>
              </Col>
              <Col xs={2} sm={1} md={1}> <b> Product Class: </b> </Col>
              <Col xs={4} md={4}>
                <FormGroup>
                  <input
                    id = "product_class"
                    type = "text"
                    placeholder="Enter Product Class"
                    ref={(input) => product_class = input}
                  />
                </FormGroup>
              </Col>
              </Row>

              <Row>
                <Col xs={2} sm={1} md={1}>  <b> Warranty: </b> </Col>
                <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "warranty"
                      type = "text"
                      placeholder="Enter Warranty"
                      ref={(input) => warranty = input}
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} sm={1} md={1}>  <b> Material: </b> </Col>
                <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "material"
                      type = "text"
                      placeholder="Enter Material"
                      ref={(input) => material = input}
                    />
                  </FormGroup>
                </Col>
              </Row>



            <Row className = "generalnotes-addproject">
            <Col xs={2} sm={1} md={1}>  <b> Priority Class: </b> </Col>
              <Col xs={10} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Priority Class"
                    ref={(input) => priority_class = input}
                  />
                </FormGroup>
              </Col>
              <Col xs={2} sm={1} md={1}> <b> Serial ID: </b> </Col>
              <Col xs={10} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Serial ID"
                    ref={(input) => serial_ID = input}
                  />
                </FormGroup>
              </Col>
              </Row>

              <Row>
                <Col xs={2} sm={1} md={1}><b>AC Line:</b> </Col>
                <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "country"
                      type = "text"
                      placeholder="Enter Price Class"
                      ref={(input) => AC_line = input}
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} sm={1} md={1}><b>Minimum Order Quantity:</b></Col>
                <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "country"
                      type = "text"
                      placeholder="Enter Quantity"
                      ref={(input) => min_ord_qty = input}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={2} sm={1} md={1}><b> Initial Order Quantity</b></Col>
                <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "country"
                      type = "text"
                      placeholder="Enter Initial Order Quantity"
                      ref={(input) => ini_ord_qty= input}
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} sm={1} md={1}> <b>Arrival Date:</b></Col>
                <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "arrivaldate"
                      type = "date"
                      placeholder="Enter Arrival Date"
                      ref={(input) => arrival_date = input}
                      />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
              <Col xs={2} sm={1} md={1}><b>Arrival Quantity:</b></Col>
              <Col xs={4} md={4}>
                  <FormGroup>
                    <input
                      id = "country"
                      type = "text"
                      placeholder="Enter Arrival Quantity"
                      ref={(input) => arrival_qty = input}
                      />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="submit-addproject">
              <Col xs={2} md={2}>
                <FormGroup>
                  <NavLink to='/'>
                    <Button onClick={this.props.handleClose} className="pricingFormButton">
                    Back to Projects</Button>
                  </NavLink>
                </FormGroup>
              </Col>
              <Col xs={2} md={2} mdOffset={8}>
                <FormGroup>
                  <Button 
                    type="submit" bsStyle="primary" className="pricingFormButton">
                    Submit
                  </Button>
                </FormGroup>
              </Col>
              </Row>
        </form>
    </div>
    )
  };
}

export default PricingForm;
