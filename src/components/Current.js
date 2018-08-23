import React from 'react';
import { NavLink } from 'react-router-dom';

class Current extends React.Component {
  render() {
  return (
    <table style={{"width" : "100%"}}>
      <thead> <h4>Current Projects</h4>
      </thead>
        <tr style={{"height" : "3em"}}>
          <th style={{"padding" : "10px"}}> Project Name </th>
          <th style={{"padding" : "10px"}}> Project Lead </th>
          <th style={{"padding" : "10px"}}> Date Created </th>
          <th style={{"padding" : "10px"}}> Status </th>
          </tr>

      {projects.map(project => (
        <tr>
        <td><NavLink to="/project-details">{project.product}</NavLink></td>
        <td>{project.name}</td>
        <td>{project.date}</td>
        <td>{project.actionPending} action items pending</td>
        </tr>
      ))}
  </table>
    );
  }
}

export default Current;
