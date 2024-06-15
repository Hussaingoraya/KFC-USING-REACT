import React from 'react'
import "./CSS/modal.css"

export default function Modal() {


return(
        <>
<div className="modal fade modalBackground " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content modalColor">
      <div className="modal-header">
        <h1 className="modal-title fs-5 modalText" id="exampleModalLabel">Select Order Channel</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body p-0">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn delivery-button" data-bs-dismiss="modal">DELIVERY</button>
        <button type="button" className="btn pickup-button">PICKUP</button>
      </div>
    </div>
  </div>
</div>


        </>

    )

}

