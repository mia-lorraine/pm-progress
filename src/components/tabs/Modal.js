import React from 'react'
import PricingForm from './PricingForm'

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <PricingForm handleClose={handleClose} />
      </section>
    </div>
  )
}

export default Modal;