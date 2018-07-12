import React from 'react';
import './table.css'

const Table = (props) => {
  return (
    <div class = "table" >
        <h5> Completed Projects </h5>
    <table>

      <thead>
        <tr>
          <th> Project name </th>
          <th> Project lead </th>
          <th> Progress </th>
          <th> Date </th>
        </tr>
      </thead>
        <tbody>
            <tr>
              <td> {props.name} </td>
              <td> {props.last} </td>
              <td>JSON file will be added here </td>
              </tr>


        </tbody>
      </table>
      </div>
  );
}

export default Table;
