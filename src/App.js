import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Form from './Form/form';
import TodoInput from './Todo/todoinput';
import TodoItem from './Todo/todoitem';
import './Todo/todoItem.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "make dinner tonight!" },
        {id: 1, text: "blah"},
        {id: 2, text: "boo"}
      ],
      nextId: 3
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

handleSubmit = (newNew) => {
  console.log('was clicked');

  this.refs.project.value= null;
  this.refs.lead.value = null;
  this.refs.date.value = null;
}


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherent',
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
      <h1> BK manage prototype</h1>
      <p> Header (are links necessary?) </p>

      <input ref = 'project' type = 'text' placeholder='project name' />
      <input ref = 'lead' type = 'text' placeholder = 'project leader'/>
      <input ref = 'date' type = 'date' />
      <button onClick ={this.handleSubmit}> Submit </button>


      <div className = 'project-wrapper'>
          <TodoInput todoText= '' addTodo = {this.addTodo}/>
          <ul> {
            this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
            })
          }
          </ul>
      </div>


      </div>
    );
  }
}

export default App;
