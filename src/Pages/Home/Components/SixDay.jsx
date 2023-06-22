import React from 'react'
import Check from "../../../Assets/check.png";

const SixDay = () => {
  return (
    <div>
                <h1 className="fs-title text-green fw-900 text-center mt-5">
          In only 6 days
        </h1>
        <p className="max-w-sm px-4 mx-auto fs-5 text-lightGray fw-600 text-center text-capitalize">
          we're going to show you exactly how you can copy our success
          step-by-step and build your own NutraFunnel that auto-dropships your
          own private label supplement for you
        </p>
        <h1 className="fs-title text-green fw-900 text-center mt-4">
          In just 6 days
        </h1>
        <p className="max-w-sm mx-auto fs-4 text-lightGray fw-600 text-center text-capitalize">
          We are going to guide you through this simple, 6 step program, that
          will help you to
        </p>
        <div className="leading-20 fs-4 text-gray fw-700 text-center text-capitalize mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img width="25px" src={Check} alt="" />
            <p className="mt-3 ms-2">Quit Your Job</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img width="25px" src={Check} alt="" />
            <p className="mt-3 ms-2">Retire</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img width="25px" src={Check} alt="" />
            <p className="mt-4 mt-md-3 ms-2">
              Get the life and Bank Account That You Want
            </p>
          </div>
        </div>
    </div>
  )
}

export default SixDay