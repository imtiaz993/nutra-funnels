import React from "react";
import DropShipping from "../../../Assets/dropShipping.png";

const Interested = () => {
  return (
    <div className="layout-container mx-auto mt-5 pt-4">
      <p className="letter-1 leading-10 fs-3 text-green fw-900 text-center text-uppercase">
        if you currently
      </p>
      <p className="letter-1 leading-10 fs-3 text-green fw-900 text-center text-uppercase">
        are interested
      </p>
      <p className="max-w-sm mx-auto fs-5 text-lightGray fw-600 text-center text-capitalize">
        in starting a 6 figure online supplement{" "}
        <span className="text-green fw-800">drop-shipping business</span>,
        automating it and working from the comfort of your own home part-time.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <img width="70%" src={DropShipping} alt="" />
      </div>
    </div>
  );
};

export default Interested;
