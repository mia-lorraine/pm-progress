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
                <td>{props.project_name}</td>
                <td>{props.username}</td>
                <td>{props.pending}</td>
                <td>{props.date}</td>
              </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Projecttable;
