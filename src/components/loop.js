import React from 'react';

class Loop extends React.Component {
  render() {
    let projects = [
      { id: 0, product: '603B', name: 'David Holt', actionPending: 5, date: '05-25-2017'},
      { id: 1, product:'SDL4k & SDL8k', name: 'N/A', actionPending: 12, date: '05-25-2017' },
      { id: 2, product: '9140 Series - Project Envoy', name: 'Greg VonRehder', actionPending: 18, date: '06-20-2017'},
      { id: 3, product: '2680 Spectrum Analyzers', name: 'N/A', actionPending: 14, date: '06-21-2017'},
      { id: 4, product: 'FRA8000', name: 'N/A', actionPending: 17, date: '10-09-2017'},
      { id: 5, product: '8500B', name: 'Greg VonRehder', actionPending: 15, date: '05-09-2018'},
      { id: 6, product: '9160', name: 'N/A', actionPending: 18, date: '02-05-2018'},
      { id: 7, product: '1696B - Mason Update', name: 'N/A', actionPending: 18, date: '02-05-2018'},
      { id: 8, product: '1785C - Mason Update', name: 'N/A', actionPending: 18, date: '02-05-2018'},
      { id: 9, product: 'MPS -ORX', name: 'N/A', actionPending: 18, date: ' 02-05-2018'},
      { id: 10, product: 'XLNB', name: 'N/A', actionPending: 18, date: ' 02-05-2018'},
      { id: 11, product: 'PVSMR', name: 'N/A', actionPending: 18, date: ' 02-05-2018'},
      { id: 12, product: '3600 Series Hipot', name: 'Greg VonRehder', actionPending: 16, date: '05-22-2018'},
      { id: 13, product:  'BA8100', name: 'David Holt', actionPending: 18, date: '06-04-2018'}
    ];

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
        <td>{project.product}</td>
        <td>{project.name}</td>
        <td>{project.date}</td>
        <td>{project.actionPending} action items pending</td>
        </tr>
      ))}
  </table>
    );
  }
}

export default Loop;
