import React from 'react'
import ProgressImage from "../../../Assets/progress.png";

const Progress = () => {
  return (
    <div className="pb-5 layout-container mx-auto mt-5 pt-3">
    <p className="letter-1 leading-0 fs-1  fw-900 text-center text-uppercase">
      If You
    </p>
    <p className="max-w-xs mx-auto fs-5 text-lightGray fw-600 text-center text-capitalize">
      Are ready to make real life-changing{" "}
      <span className="text-green fw-800">progress</span>{" "}
      <span className="fw-800">in just 6-days!</span>
    </p>
    <div className="w-100 w-md-75 mx-auto d-flex justify-content-center align-items-center">
      <img width="90%" src={ProgressImage} alt="" />
    </div>
  </div>
  )
}

export default Progress