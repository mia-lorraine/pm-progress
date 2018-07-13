import React, { Component } from 'react';
import './App.css';
import './Todo/todoItem.css';
import './Components/table.css';
import TodoInput from './Todo/todoinput';
import TodoItem from './Todo/todoitem';
import Table from './Components/table';
import Table2 from './Components/table2';
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

class tabletest extends Component {
  render() {
      return (
    <div className = "table-container" >
        <h5> CURRENT PROJETS </h5>
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
              <td> </td>
              <td>  </td>
              <td> </td>
              <td> testing testing testing </td>
            </tr>
            <tr>
              <td> data </td>
              <td> data</td>
              <td> data </td>
              <td> data </td>
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
    this.state = {
      tableData: {},
  }

componentDidMount(){
    this.setState({tableData:table_info})
}

  render() {
    return (
      <div className="App">
      <NavBar/>
      <h1> New Product Introduction Tool </h1>
      <div className = 'project-wrapper'>
        <h5> Create New Project (button) </h5>
          <TodoInput todoText= '' addTodo = {this.addTodo}/>
          <ul> {
            this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
            })
          }
          </ul>
      </div>
      <tabletest table_info = {this.state.tableData && this.state.tableData.projectItem}/>

      </div>

    );
  }
}

export default App;
