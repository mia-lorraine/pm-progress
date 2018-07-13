import React, { Component } from 'react';
import './App.css';
import './Todo/todoItem.css';
import './Components/table.css';
import NavBar from './Components/navbar'
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


let table_info =
{
  projectItem:  {
    id: '1',
    name: 'Mia Laurea',
    status: 'woohoo'
  }
};

class Tabletest extends Component {
  constructor(props){
    super(props);
  }
  render() {
      return (
    <div className = "table-container" >
        <h5> Projects </h5>
    <table>
      <thead>
        <tr>
          <th> Project name </th>
          <th> Status </th>
          <th> Pending Overview </th>
          <th> Date Started</th>
        </tr>
      </thead>
        <tbody>
            <tr>
              <td> {this.props.name} </td>
              <td> {this.props.status}</td>
              <td> test data  </td>
              <td>  </td>
            </tr>
        </tbody>
      </table>
      </div>
      );
  }
}


class App extends Component{
  constructor(){
    super();
    this.state = {tableData: {}}
  }
  componentDidMount(){
      this.setState({tableData:table_info})
  }

  render() {
    return (
      <div className="App">
      <NavBar/>
      <h1> New Product Introduction Tool </h1>
      <Tabletest projectItem = {this.state.tableData && this.state.tableData.projectItem}/>

      </div>

    );
  }
}

export default App;
