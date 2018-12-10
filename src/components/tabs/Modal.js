import React from 'react'
import PricingForm from './PricingForm'

const Modal = ({ originId, originName, handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <PricingForm 
          originId={originId}
          originName={originName}
          handleClose={handleClose} />
      </section>
    </div>
  )
}

export default Modal;