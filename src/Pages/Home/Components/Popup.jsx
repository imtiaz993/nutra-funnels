import React from 'react'

const Popup = () => {
  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-md">
        <div className="modal-body ">
          <h5
            className=" text-green text-center fw-900 fs-1 mb-4 mt-4"
            id="exampleModalLabel"
          >
            Sign Up
          </h5>
          <div className="px-4">
          <input placeholder="NAME" className="customInput"/>
          <input placeholder="Email" className="customInput"/>
          <input placeholder="Password" className="customInput"/>
          <input placeholder="+1 ( XXX ) XXX-XXXX" className="customInput"/>
          </div>
          <p className="text-gray fs-4 fw-700 text-center text-capitalize mt-4 pt-2 pb-2">
            Join For Free - No Charge!
          </p>
          <div className="d-flex justify-content-center position-relative">
            <button className="bottom-20 position-absolute btn-secondary-black fs-4 fw-700">
              Join Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Popup