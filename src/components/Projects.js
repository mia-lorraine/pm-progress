import React from 'react';

export const Project = ({name, manager, date}) => (
    <tr>
        <td>
            {name}
        </td>
        <td>
            {manager}
        </td>
        <td>
            {date}
        </td>
    </tr>
)
