import React from 'react';
import '../styles/loop.css';


class Loop extends React.Component {
  render() {
    let projects = [
      { id: 0, product: '603B', name: 'David Holt', action: '5 action items pending', date: '05-25-2017'},
      { id: 1, product:'SDL4k & SDL8k', name: 'N/A', action: '12 action items pending', date: '05-25-2017' },
      { id: 2, product: '9140 Series - Project Envoy', name: 'Greg VonRehder', action: '18 action items pending', date: '06-20-2017'},
      { id: 3, product: '2680 Spectrum Analyzers', name: 'N/A', action: '14 action items pending', date: '06-21-2017'},
      { id: 4, product: 'FRA8000', name: 'N/A', action: '17 action items pending', date: '10-09-2017'},
      { id: 5, product: '8500B', name: 'Greg VonRehder', action: '15 action items pending', date: '05-09-2018'},
      { id: 6, product: '9160', name: 'N/A', action: '18 action items pending', date: '02-05-2018'},
      { id: 7, product: '1696B - Mason Update', name: 'N/A', action: '18 action items pending', date: '02-05-2018'},
      { id: 8, product: '1785C - Mason Update', name: 'N/A', action: '18 action items pending', date: '02-05-2018'},
      { id: 9, product: 'MPS -ORX', name: 'N/A', action: '18 action items pending', date: ' 02-05-2018'},
      { id: 10, product: 'XLNB', name: 'N/A', action: '18 action items pending', date: ' 02-05-2018'},
      { id: 11, product: 'PVSMR', name: 'N/A', action: '18 action items pending', date: ' 02-05-2018'},
      { id: 12, product: '3600 Series Hipot', name: 'Greg VonRehder', action: '16 action items pending', date: '05-22-2018'},
      { id: 13, product:  'BA8100', name: 'David Holt', action: '18 action items pending', date: '06-04-2018'}
    ];
  return (
    <table>
      <thead> <h2>Current Projects</h2>
      </thead>
        <tr>
          <th> Project Name </th>
          <th> Project Lead </th>
          <th> Date Created </th>
          <th> Status </th>
          </tr>

      {projects.map(project => (
        <tr>
        <td>{project.product}</td>
        <td>{project.name}</td>
        <td>{project.date}</td>
        <td>{project.action}</td>
        </tr>
      ))}
  </table>
    );
  }
}

export default Loop;
