import React from 'react';
import axios from 'axios';
import '../../styles/App.css';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Row, Col, FormGroup,  Modal } from 'react-bootstrap';

const PricingForm = () => {
  let bk_modelno, product_notes, vendor, desc, direct_cost, country, price, price_class,
  product_class, warranty, material, priority_class, serial_ID, AC_line, min_ord_qty,
  ini_ord_qty, arrival_date, arrival_qty;


  console.log(this.newPricingID)
  const submit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/pricing', {
        originID: this.props.originID,
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
  return (
    <div className = "static-modal">
      <Modal.Dialog>
        <form onSubmit={submit} className="form black-container">
          <Grid>
            <Row className = "name-addproject">
              <Col xs={2} md={2}> <b> Project Name:</b> </Col>
              <Col xs={10} sm={7} md={4}>
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
            </Row>
            <Row className = "supplier-addproject">
              <Col xs={2} md={2}> <b>Supplier:</b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "supplier"
                    type = "text"
                    placeholder="Enter product notes here"
                    required
                    ref={(input) => product_notes = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="manager-addproject">
              <Col xs={2} md={2}> <b> Vendor: </b></Col>
              <Col xs={10} sm={7} md={4}>
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
              <Col xs={2} md={2}> <b> Description </b></Col>
              <Col xs={10} sm={7} md={4}>
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
              <Col xs={2} md={2}> <b> Direct Cost </b></Col>
              <Col xs={10} sm={7} md={4}>
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
            <br />
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Country:</b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter general notes here"
                    ref={(input) => country = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Price: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "price"
                    type = "text"
                    placeholder="Enter general notes here"
                    ref={(input) => price = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Price Class: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Price Class"
                    ref={(input) => price_class = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Product Class: </b> </Col>
              <Col xs={10} sm={7} md={4}>
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
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Warranty: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "warranty"
                    type = "text"
                    placeholder="Enter Price Class"
                    ref={(input) => warranty = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Material: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "material"
                    type = "text"
                    placeholder="Enter Price Class"
                    ref={(input) => material = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Priority Class: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Priority Class"
                    ref={(input) => priority_class = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Serial ID: </b> </Col>
              <Col xs={10} sm={7} md={4}>
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
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> AC Line: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Price Class"
                    ref={(input) => AC_line = input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Minimum Order Quantity: </b> </Col>
              <Col xs={10} sm={7} md={4}>
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
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Initial Order Quantity: </b> </Col>
              <Col xs={10} sm={7} md={4}>
                <FormGroup>
                  <input
                    id = "country"
                    type = "text"
                    placeholder="Enter Initial Order Quantity"
                    ref={(input) => ini_ord_qty= input}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Arrival Date: </b> </Col>
              <Col xs={10} sm={7} md={4}>
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
            <Row className = "generalnotes-addproject">
              <Col xs={2} md={2}> <b> Arrival Quantity: </b> </Col>
              <Col xs={10} sm={7} md={4}>
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
              <Col xs={5} md={5}>
                <FormGroup>
                  <NavLink to='/'><Button >Back to Projects</Button></NavLink>
                </FormGroup>
              </Col>
              <Col xs={5} md={5}>
                <FormGroup>
                  <Button type="submit" bsStyle="primary">
                Submit
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Grid>
        </form>
      </Modal.Dialog>
    </div>

  );
};

export default PricingForm;
