import React from 'react';
import './table.css'

const Table = (props) => {
  return (
    <div class = "table-container" >
        <h5> Completed Projects </h5>
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
              <td> insert project name</td>
              <td> insert status props.data.status </td>
              <td>  </td>
              </tr>
        </tbody>
      </table>
      </div>

  );
}

export default Table;
