
  import React, { Component } from 'react';
  import { Modal } from 'react-bootstrap';

  class AddModal extends Component {
   
    render(){
      console.log(this.props)
      return(
        <Modal show={this.props.isOpen} >
          <h1>hello</h1>
        </Modal>
      )
    }
  }

  export default AddModal;