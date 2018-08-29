import React from 'react';
import axios from 'axios';
import Details from '../components/Details';
import '../styles/App.css';
import { Chip } from 'react-mdl';
import { NavLink } from 'react-router-dom'

const headerStyle = {
  fontSize: 40,
  padding: 10,
  height: 40,
  backgroundColor: '#02274D',
  color: '#FFF'
};
let tableBodyStyle = {
  fontSize: 20,
  fontWeight: 'bold',
  padding: 5,
  height: 25,
  fontFamily: 'Helvetica, Arial, sans-serif'
}
let tableSectionStyle = {
  padding: 5,
  height: 25
}
let buttonStyle = {
  float: 'right'
}
let linkStyle = {
  color: '#0061C3',
  cursor: 'pointer'
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
        <div className='Header' style={headerStyle}><p>ManageBK - New Product Information Tool</p>
          <Chip style={buttonStyle}><NavLink to="add">CREATE PROJECT</NavLink></Chip>
        </div>
          <div className='projectsContent'>
          <h4>Current Projects</h4>
        <div className="currentProjectWrap">
        <div className="projectHeaderWrap">
            <ul className="currentProjectItems">  
                  <li style={tableBodyStyle} width='33%' align='left'>Product</li>
                  <li style={tableBodyStyle} width='33%' align='left'>Manager</li>
                  <li style={tableBodyStyle} width='33%' align='left'>Date</li>
            </ul>
          </div>
        {
          this.state.projects.map((item,index) => (
              <div className="projectMapWrap">
                    <li style={tableSectionStyle} width='33%'>
                      <a style={linkStyle} onClick={()=>{this.clickMe(item); this.showDetails();}}>
                        {item.name}
                      </a>
                    </li>
                    <li style={tableSectionStyle} width='33%'>{item.manager}</li>
                    <li style={tableSectionStyle} width='33%'>{item.date}</li>
              </div>

          ))}
        </div>
          {/* <Addproject /> */}
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
