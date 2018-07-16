import React from 'react';
import '../styles/App.css';

const Projecttable = (props) => {
  return (
    <div className='table-container'>
        <h5>Projects</h5>
      <table>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Status</th>
            <th>Pending Overview</th>
            <th>Date Started</th>
          </tr>
        </thead>
          <tbody>
              <tr>
                <td>{props.name}</td>
                <td>{props.status}</td>
                <td>test data</td>
                <td>test data</td>
              </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Projecttable;
