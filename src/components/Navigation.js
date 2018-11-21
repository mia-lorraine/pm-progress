import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AddProject from '../components/Addproject';
import PricingForm from './tabs/PricingForm';

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink 
              to="/"
              onClick={(e) => {
                this.hideDetails(e);
                window.location.reload();
              }}>ManageBK</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <NavLink
              to="/add"
              render={(props) => (
                <AddProject
                  {...props}
                  newProject={this.addProject}
                />)}>Create a Project
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              to="/pricing"
              render={(props) => (
                <PricingForm
                  {...props}
                  newProject={this.addProject}
                />)}>Create a Project
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;