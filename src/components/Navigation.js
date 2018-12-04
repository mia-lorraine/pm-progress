import React from 'react';
import '../styles/Navigation.css';

import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AddProject from '../components/Addproject';
import PricingForm from './tabs/PricingForm';

const Navigation = () => {
  return (
    <div className="npiNav">
      <Grid>
        <Row>
          <Col xs={3} sm={3} md={3}>
            <a href="/">
              <img src="https://s3-us-west-1.amazonaws.com/bkpmedia/images/bk-logo-white.png"></img>
            </a>
          </Col>
          <Col xs={3} sm={6} md={6}>
            <b className="npiSubHeading">New Product Introduction Tool</b>
          </Col>
          <Col xsOffset={6} mdOffset={6}>
          <NavLink to='/add'>
            <Button bsSize="small" bsStyle="success"><Glyphicon glyph="plus" />
              <b>ADD PROJECT</b>
            </Button>
          </NavLink>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Navigation;