import React from 'react';
import '../styles/App.css';

const Quickview = (props) => {

  return (
      <div className='projectQuickView'>
        <h1>View a Project's Details</h1>
          <p>Product: {props.product}</p>
          <p>Project Manager: {props.name}</p>
          <p>Date Initiated: {props.date}</p>
          <p>Total Items Pending: {props.pending}</p>
          <button>Complete Project</button>
          <button>Cancel Project</button>
      </div>
    )
}

export default Quickview;
