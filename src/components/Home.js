import React from 'react';
import axios from 'axios';

let tableStyle = {
  width: '1000px'
};
let linkStyle = {
  cursor: 'pointer'
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      showModal: false
    }
  }
  getData() {
    axios
    .get('http://localhost:3001/projects')
    .then(res => {
      const data = res.data;
      this.setState({
        projects: data
      })
    })
  }
  clickMe(item){
    console.log(item);
    const array = item;
    this.setState({
      item: array
   })
 }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
    <div className="App">
    <table style={tableStyle}>
    <tbody>
      <tr>
        <th width='33%' align='left'>Product</th>
        <th width='33%' align='left'>Manager</th>
        <th width='33%' align='left'>Date</th>
      </tr>
    </tbody>
    </table>
    {
    this.state.projects.map((item,index) => (
        <div key={item.id}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td width='33%'><a style={linkStyle} onClick={this.clickMe.bind(this, item)}>{item.name}</a></td>
                <td width='33%'>{item.manager}</td>
                <td width='33%'>{item.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    );
  }
} // End of Component

export default Home;
