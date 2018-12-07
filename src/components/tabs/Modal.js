import React from 'react'
import PricingForm from './PricingForm'

const Modal = ({ originId, handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <PricingForm 
          projectOrigin={originId}
          handleClose={handleClose} />
      </section>
    </div>
  )
}

export default Modal;