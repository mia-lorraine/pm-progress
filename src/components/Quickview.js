import React from 'react'
import '../styles/App.css';


const Quickview = ( {id, name, manager, date}) => {
  return(
    <div className="viewerDefault">
    <p>Project Name: {name} <br />
        Project Manager: {manager} <br />
        Project Date: {date} </p> <br />
      <button id="button">Button</button>
    </div>
  )
}

export default Quickview;
