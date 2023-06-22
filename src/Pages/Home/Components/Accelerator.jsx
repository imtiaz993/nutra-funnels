import React from "react";
import SixDayAcc from "../../../Assets/sixDayAcc.png";

const Accelerator = () => {
  return (
    <div className="layout-container mx-auto">
      <p className="letter-1 fs-4 text-gray fw-800 text-center text-uppercase">
        In the 6-day
      </p>
      <p className="leading-0 fs-1 text-green fw-900 text-center text-uppercase">
        Accelerator
      </p>
      <p className="max-w-xs mx-auto fs-6 text-lightGray fw-600 text-center text-capitalize pt-3 pb-3">
        you'll get the support of hundreds of other people just like you that
        are looking to build profitable passive income streams online! These
        people will help encourage you every step of your online business
        journey.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <img width="70%" src={SixDayAcc} alt="" />
      </div>
    </div>
  );
};

export default Accelerator;
