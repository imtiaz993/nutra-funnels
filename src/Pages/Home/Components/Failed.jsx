import React from "react";
import FailedImage from "../../../Assets/failed.png";

const Failed = () => {
  return (
    <div className="layout-container mx-auto mt-4">
      <div className="d-flex justify-content-center position-relative">
        <button className="btn-secondary-red fs-4 fw-700">Yes, I'm in</button>
      </div>
      <p className="text-gray fs-6 fw-800 text-center text-capitalize">
        Join For Free - No Charge!
      </p>
      <p className="letter-1 leading-0 fs-3 text-gray fw-800 text-center text-uppercase mt-4">
        This is for
      </p>
      <p className="letter-1 leading-20 fs-2 text-green fw-900 text-center text-uppercase">
        you if you
      </p>
      <p className="max-w-sm mx-auto fs-4 fw-600 text-center text-capitalize">
        Have already tried to build an online business before and{" "}
        <span className="text-green fw-800">failed</span>.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <img width="70%" src={FailedImage} alt="" />
      </div>
    </div>
  );
};

export default Failed;
