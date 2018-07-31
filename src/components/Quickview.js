import React from 'react';

class Quickview extends React.Component{
  render() {
    let projectItems = [
      { id: 1, project_name: '603B', username: 'David Holt', pending: '8', date: '05-25-2017'}
    ];
    return (
          <div>
            {projectItems.map(projectItem =>(
              <div>
                <h3>Project Details</h3>
                <p>Product: {projectItem.project_name}</p>
                <p>Project Manager: {projectItem.username}</p>
                <p>Date Initiated: {projectItem.date}</p>
                <p>Total Items Pending: {projectItem.pending}</p>
                <button>Complete Project</button>
                <button>Cancel Project</button>
              </div>
            ))}
          </div>
    );
  }
}

export default Quickview;
