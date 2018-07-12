import React, { Component } from 'react';
import './App.css';
import './Todo/todoItem.css';
import './Components/table.css';
import TodoInput from './Todo/todoinput';
import TodoItem from './Todo/todoitem';
import Table from './Components/table'


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "clean up code" },
        {id: 1, text: "push to Heroku"},
        {id: 2, text: "create new components"}
      ],
      nextId: 3,
      table: [
        {name: 'Mia' , last: 'Laurea'},
        {name: 'Raymond', last: 'Hsu'}
      ]




    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

addTodo(todoText) {
  let todos = this.state.todos.slice();
  todos.push({id: this.state.nextId, text: todoText});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId
  });
}

removeTodo(id) {
  this.setState({
    todos: this.state.todos.filter((todo, index) => todo.id !== id)
  });
}

  render() {
    return (
      <div className="App">
      <h1> BK manage prototype</h1>
      <div className = 'project-wrapper'>
          <TodoInput todoText= '' addTodo = {this.addTodo}/>
          <ul> {
            this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
            })
          }
          </ul>
      </div>

      <Table/>

      </div>
    );
  }
}

export default App;
