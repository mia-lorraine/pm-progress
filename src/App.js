import React, { Component } from 'react';
import './App.css';

let fakeTableData = {
  projectItem:  {
    id: 1,
    name: 'Mia Laurea',
    status: 'woohoo'
  }
};

class Tabletest extends Component {
  render() {
      return (
    <div className='table-container'>
        <h5>Projects</h5>
      <table>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Status</th>
            <th>Pending Overview</th>
            <th>Date Started</th>
          </tr>
        </thead>
          <tbody>
              <tr>
                <td>{this.props.name}</td>
                <td>{this.props.status}</td>
                <td>test data</td>
                <td>test data</td>
              </tr>
          </tbody>
        </table>
      </div>
      )
  }
}
class App extends Component{
  constructor(){
    super();
    this.state = {tableData: {}}
  }
  componentDidMount(){
      this.setState({tableData: fakeTableData});
  }
  render() {
    return (
      <div className="App">
        <Tabletest
        status={this.state.tableData &&
        this.state.tableData.projectItem}/>
      </div>
    );
  }
}

export default App;
