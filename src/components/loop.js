import React from 'react';


class Loop extends React.Component {
  render() {
    let projects = [
      { product: '603B', name: 'David Holt', date: '05-25-2017'},
      { product:'SDLk8 & SDLk', name: 'N/A', date: '05-25-2017' },
      { product: '9140 Series - Proejct Envoy', name: 'Greg VonRehder', date: '06-20-2017'},
      { product: 'FRA8000', name: 'N/A', date: '10-09-2017'},
      { product: '9160', name: 'N/A', date: '02-05-2018'},
      { product: '1696B - Mason Update', name: 'N/A', date: '02-05-2018'},
      { product: '1785C - Mason Update', name: 'N/A', date: '02-05-2018'},
      { product: 'MPS -ORX', name: 'N/A', date: ' 02-05-2018'},
      { product: 'XLNB', name: 'N/A', date: ' 02-05-2018'},
      { product: 'PVSMR', name: 'N/A', date: ' 02-05-2018'},
      { product: '3600 Series Hipot', name: 'Greg VonRehder', date: '05-22-2018'},
      { product:  'BA8100', name: 'David Holt', date: '06-04-2018'}
    ];
  return (
    <ul>
      {projects.map(project => (
        <li>
        BK product is: {project.product} administered by {project.name} on {project.date}.
        </li>
      ))}
    </ul>
    );
  }
}

export default Loop;
