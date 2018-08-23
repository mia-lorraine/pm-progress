import React from 'react';

let backdropStyle = {
    position : 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
}
let modalStyle = {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding:30,
    position: "relative"
}

class Details extends React.Component {
    hideDetails = (e) => {
        this.props.hideDetails && this.props.hideDetails(e);
    }
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
            <ul>
            <li>{this.props.children}</li>
            <li>Project Name: {this.props.name}</li>
            <li>Project Manager: {this.props.manager}</li>
            <li>Project Date: {this.props.date}</li>            
            </ul>
        <button onClick={(e) => {this.hideDetails(e)}}>Close</button>
        </div>
      </div>
    );
  }
} // End of Component

export default Details;
