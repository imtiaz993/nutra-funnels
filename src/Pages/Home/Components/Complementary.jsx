import React from "react";
import IsComplementary from "../../../Assets/isComplementary.png";

const Complementary = () => {
  return (
    <div className="layout-container mx-auto">
      <p className="fs-3 text-gray fw-800 text-center text-capitalize">
        The 6 day Accelerator
      </p>
      <p className="letter-1 leading-0 fs-1 text-green fw-900 text-center text-uppercase pb-3">
        IS Complimentary!
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <img width="70%" src={IsComplementary} alt="" />
      </div>
    </div>
  );
};

export default Complementary;
