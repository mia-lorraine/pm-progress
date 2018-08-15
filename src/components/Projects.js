import React from 'react';

export const Project = ({id, name, manager, date}) => (
  <tr>
        <td>
          <a key = {name} href = "/project-details">
            {name}
          </a>
        </td>
        <td>
            {manager}
        </td>
        <td>
            {date}
        </td>
    </tr>
)
