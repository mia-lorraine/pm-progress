import React, { Component } from 'react';
// import {Alert} from 'react-bootstrap';

class AlertMe extends Component {
    render(){
        return(
            <div>
               <div class="alert alert-success" role="alert">
                 This is a success alert—check it out!
                </div>
            </div>
        );
    }
}


export default AlertMe;