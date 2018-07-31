import React from 'react';
import { NavLink } from 'react-router-dom';
import Current from '../components/Current';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="App">
      <div className="headerDefault">
        <h3 className="titleDefault"><NavLink to="/">ManageBK</NavLink></h3>
      </div>
      <div className="contentDefault">
        <Current/>
      </div>
    </div>
  )
}

export default Home;
