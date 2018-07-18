import React from 'react';

class Button extends React.Component {

  handleClick() {
    console.log('this is: ', this);
  }


render(){
    return(
      <button onClick ={(e) => this.handleClick(e)}>
        Hello Create a project test
      </button>
    );
  }
}


export default Button;
