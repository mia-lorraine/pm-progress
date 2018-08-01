import React from 'react';
import { NavLink } from 'react-router-dom';
import Quickview from '../components/Quickview';
import Window from '../components/tab'

const Projectdetails = () => {
  return (
    <div>
      <div className="headerDefault">
        <h3 className="titleDefault"><NavLink to="/">ManageBK</NavLink></h3></div>
      <div className="contentDefault">
        <Quickview/>
      </div>
      <div className="contentDefault">
        <Window/>
      </div>
    </div>

  );
}
export default Projectdetails;
