import React from 'react';
import axios from 'axios';
import Details from '../components/Details';
import '../styles/App.css';

let tableStyle = {
  width: '1000px',
  backgroundColor: '#FFF',
  margin: '0 auto',
  border: 0,
};
let tableBodyStyle = {
  fontSize: 18,
  padding: 5,
  height: 25,
  fontFamily: 'Helvetica, Arial, sans-serif'
}
let tableSectionStyle = {
  padding: 5,
  height: 25
}
let linkStyle = {
  color: '#0061C3',
  cursor: 'pointer'
};
let headerStyle = {
  fontSize: 50,
  padding: 20,
  height: 60,
  backgroundColor: '#02274D',
  color: '#FFF'
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      show: false,
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
  showDetails = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }

  clickMe(item){
    console.log(item);
    const getId = item.id
    const itemVal = item
    console.log(getId);
    this.setState({
      ...this.state,
      data: itemVal,
      grabID: getId
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div className='Header' style={headerStyle}><p>ManageBK</p></div>
          <div className='Content'>
          <h4>Current Projects</h4>
            <div className='TableWrap'></div>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={tableBodyStyle} width='33%' align='left'>Product</th>
              <th style={tableBodyStyle} width='33%' align='left'>Manager</th>
              <th style={tableBodyStyle} width='33%' align='left'>Date</th>
            </tr>
          </tbody>
        </table>
        {
          this.state.projects.map((item,index) => (
            <div key={item.id}>
              <table style={tableStyle}>
                <tbody>
                  <tr>
                    <td style={tableSectionStyle} width='33%'>
                    <a style={linkStyle}
                       onClick={()=>{this.clickMe(item);
                                     this.showDetails();
                     }}>
                      {item.name}
                      </a>
                    </td>
                    <td style={tableSectionStyle} width='33%'>{item.manager}</td>
                    <td style={tableSectionStyle} width='33%'>{item.date}</td>
                  </tr>


                </tbody>
              </table>
            </div>
          ))}

          <Details
            key={this.state.projects.id}
            hideDetails={this.showDetails}
            show={this.state.show}
            data={this.state.data}
            state={this.state}
            />
      
      
      </div>

      </div>
    );
  }
} // End of Component

export default Home;
