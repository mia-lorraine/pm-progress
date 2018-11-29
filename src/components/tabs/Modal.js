import React, { Component } from 'react';
let productModalStyle = {
  position: 'fixed',
  overflow: 'auto',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  zIndex: 999999
} 
class AddProductModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: !this.props.show
    }
  }
  hideModal(){
    this.setState({
        isOpen: !this.props.show
      });
  }
    render(){
      return(
        <div className="pricingModal" style={productModalStyle}>
          Hello. 
          <button onClick={this.hideModal}>Back to Project</button> 
        </div>

        )
    }
  }

  export default AddProductModal;