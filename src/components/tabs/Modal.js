import React from 'react'
import PricingForm from './PricingForm'

const Modal = ({ projectOrigin, handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <PricingForm projectOrigin={projectOrigin}handleClose={handleClose} />
      </section>
    </div>
  )
}

export default Modal;