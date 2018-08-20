import React, {Component} from 'react';
import '../styles/App.css';
import axios from 'axios'

// import {Router, Route, Link} from 'react-router-dom';
import ProjectOverview from './ProjectOverview'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  getData() {
    axios.get('http://localhost:3000/projects').then(res => {
      const data = res.data;
      this.setState({projects: data})
    })
  }

  clickMe(item) {
    console.log(item);
    const array = item;
    this.setState({item: array})
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Current Projects
        </h1>
      </header>

      <tr>
        <th>
          Name
        </th>
        <th>
          Manager
        </th>
        <th>
          Date
        </th>
      </tr>

      {
        this.state.projects.map((item, index) => (<div key={item.id}>

          <table>
            <td>
              <a onClick={this.clickMe.bind(this, item)}>
                {item.name}
              </a>
            </td>
            <td>
              {item.manager}

            </td>
            <td>
              {item.date}
            </td>
          </table>
        </div>))
      }
      <ProjectOverview key={this.state.item} {...this.state.item}/>

    </div>);
  }
}

export default List;
