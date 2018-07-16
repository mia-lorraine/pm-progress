import React, { Component } from 'react';
import Projecttable from './components/Projecttable';
import './styles/App.css';

let fakeTableData = {
  projectItem:  {
    id: 1,
    name: 'Mia Laurea',
    status: 'woohoo'
  }
};

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
        <Projecttable name={this.state.tableData.projectItem && this.state.tableData.projectItem.name}/>
      </div>
    );
  }
}

export default App;
