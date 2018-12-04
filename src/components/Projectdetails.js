import React from 'react';
import { NavLink } from 'react-router-dom';
import Quickview from '../components/Quickview';

const Projectdetails = () => {
  return (
    <div>
      <div className="headerDefault">
        <h3 className="titleDefault"><NavLink to="/">ManageBK</NavLink></h3></div>
      <div className="quickviewDefault">
        <Quickview/>
      </div>
      <div className="projectDetailsDefault">
      </div>
    </div>
  );
};
export default Projectdetails;
