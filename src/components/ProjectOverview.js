import React from 'react';
import { Tab, Tabs } from 'react-mdl';
import '../styles/tab.css';

import axios from 'axios'

class Overview extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
            projectDetails: []
            }
      }

      getData(){
        axios
        .get("http://localhost:3000/projectDetails")
        .then(response => {
          const data = response.data
          this.setState({
            projectDetails: data
          })
        })
      }

      componentDidMount(){
        this.getData();
      }



      render(){
        const {projectDetails} = this.state;
          return (
            <div>
            {projectDetails.map(pdeets => {
              const {wordtest} = pdeets;
              return(
                <h3> hi {wordtest}</h3>
              )
            })}
            </div>
          );
      }
  }


export default Overview;
