import React from 'react';
import axios from 'axios';
import Details from '../components/Details';

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
      show: false,
      message: 'Hello'
    };
  }
  getData() {
    axios
      .get('http://localhost:3001/projects')
      .then(res => {
        const data = res.data;
        this.setState({
          projects: data
        });
      });
  }
  clickMe(item){
    console.log(item);
    const array = item;
    this.setState({
      ...this.state,
      item: array
    });
  }
  showDetails = () => {
    this.setState({
      ...this.state,
      show: !this.state.show, 
    });
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
                    <td width='33%'>
                    <a style={linkStyle} 
                       onClick={()=>{this.clickMe.bind(this,item); 
                                     this.showDetails(); 
                     }}>
                      {item.name}
                      </a>
                    </td>
                    <td width='33%'>{item.manager}</td>
                    <td width='33%'>{item.date}</td>
                  </tr>
                </tbody>
              </table>
                <Details key={this.state.item}{...this.state.item}

                  hideDetails={this.showDetails}
                  show={this.state.show}
                  item={item}
                 >
                </Details>
            </div>
          ))}
      </div>
    );
  }
} // End of Component

export default Home;
