import React from 'react';
import '../styles/App.css';

const Data = (props) => {
  return (
    <tr>
                <td>{props.product}</td>
                <td>{props.name}</td>
                <td>{props.action}</td>
                <td>{props.date}</td>

      </tr>
  )
}

export default Data;
