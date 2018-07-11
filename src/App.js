import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Form from './Form/form'

class FullForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      emailaddress: "",
      password: "",
      editor: "",
      message: "",
      terms: false,
      test: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Forms in React</span>
              </div>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="emailaddress"
                      value={this.state.emailaddress}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Pick your editor</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.editor}
                        name="editor"
                        onChange={this.handleChange}
                      >
                        <option value="vscode">VsCode</option>
                        <option value="atom">Atom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">What do you like about React</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={this.state.terms}
                        onChange={this.handleChange}
                      />
                      I agree to the{" "}
                      <a href="https://google.com">terms and conditions</a>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="label">
                      Do you test your React code?
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={this.handleChange}
                        value="Yes"
                        checked={this.state.test === "Yes"}
                      />
                      Yes
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={this.handleChange}
                        value="No"
                        checked={this.state.test === "No"}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>Full Name: {this.state.fullname}</p>
                  <p>Email Address: {this.state.emailaddress}</p>
                  <p>Password: {this.state.password}</p>
                  <p>Choice in Editor: {this.state.editor}</p>
                  <p>Why React: {this.state.message}</p>
                  <p>Terms and Condition: {this.state.terms}</p>
                  <p>Do you test?: {this.state.test}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class App extends Component {
  state = {
    persons: [
      { name: 'Mia', age: 21 },
      { name: 'Ray' , age: 20 }
    ],
      form: [
        {project: 'project 43423432423', create: 'john doe', date: 'may 2018'}
      ],
    otherState: 'some other value'
  }

//assigning a method to the button onclick. was called using this.switchNameHandler
switchNameHandler = (newName) => {
  // console.log('was clicked');
 this.setState({ //this changes/overwrites other state
   persons: [
     { name: newName, age: 22},
     { name: 'Ray' , age: 20 }
   ]
 })
}
//changing the name function, using state.
nameChangedHandler = (event) => {
  this.setState({ //this changes/overwrites other state
    persons: [
      { name: 'Mia Lorraine', age: 21 },
      { name: event.target.value, age: 20 }
    ]

  })
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

      <FullForm/>
      <button
      style = {style}
      onClick = {this.switchNameHandler.bind(this, 'Mia!!!!!')}> Switch Names </button>


      <Person
      name ={this.state.persons[0].name}
      age ={this.state.persons[0].age}/>
      <Person
      name ={this.state.persons[1].name}
      age ={this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this, 'Max')}
      changed={this.nameChangedHandler}> My hobbies are dancing!
      </Person>


      <Form
      project = {this.state.form[0].project}
      create = {this.state.form[0].create}
      date = {this.state.form[0].date}>
      </Form>



      </div>
    );
  }
}

export default App;
