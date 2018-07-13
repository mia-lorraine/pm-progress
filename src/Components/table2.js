import React from 'react';
import './table.css'


const Table2 = (props) => {
  return (
<div class = "table-container" >
    <h5> CURRENT PROJETS </h5>
<table>

  <thead>
    <tr>
      <th> Project name </th>
      <th> Status </th>
      <th> Pending Overview </th>
      <th> Date Started</th>
    </tr>
  </thead>
    <tbody>
        <tr>
          <td> {props.projectItem.id} </td>
          <td>  </td>
          <td> data </td>
          <td> data </td>
        </tr>
        <tr>
          <td> data </td>
          <td> data</td>
          <td> data </td>
          <td> data </td>
        </tr>

    </tbody>
  </table>
  </div>
  );
}

export default Table2;
