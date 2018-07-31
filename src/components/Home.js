import React from 'react';
import Quickview from '../components/Quickview';

let headerDefaultStyle = {
  height: '75px',
  width: 'auto',
  backgroundColor: '#004a83'
};

let contentDefaultStyle = {
  backgroundColor: '#fafafa',
  width: '1000px',
  border: '1px solid grey',
  margin: '0 auto',
  padding: '0 20px 20px 20px'
}
const Home = () => {
  return (
    <div className="App">
      <div style={headerDefaultStyle}></div>
      <div style={contentDefaultStyle}>
      <Quickview
        product={this.state.serverData.projects && this.state.serverData.projects.product}
        name={this.state.serverData.projects && this.state.serverData.projects.name}
        date={this.state.serverData.projects && this.state.serverData.projects.date}
        pending={this.state.serverData.projects && this.state.serverData.projects.pendingItems}/>
      </div>
    </div>
  )
}

export default Home;
