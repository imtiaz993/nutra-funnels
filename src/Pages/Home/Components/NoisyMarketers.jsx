import React from "react";
import NoisyMarketer from "../../../Assets/noisyMarketer.png";

const NoisyMarketers = () => {
  return (
    <div className="layout-container mx-auto d-md-flex justify-content-center align-items-center mt-5 pt-4">
      <div className="d-flex justify-content-center align-items-center">
        <img width="90%" src={NoisyMarketer} alt="" />
      </div>
      <div className="ms-4">
        <p className="letter-1 fs-1 text-left leading-0 fw-900 text-uppercase mt-4">
          If You
        </p>
        <p className="max-w-xs mx-auto fs-5 mt-4 text-left text-lightGray fw-600 text-capitalize">
          Want expert, credible sound{" "}
          <span className="text-green fw-700">guidance</span> to filter all the
          other{" "}
          <span className="fs-4 text-green fw-800">"noisy marketers"</span>{" "}
        </p>
        <p className="max-w-xs text-left leading-0 mx-auto fs-5 text-lightGray fw-600 text-capitalize">
          {" "}
          telling you what to do.
        </p>
      </div>
    </div>
  );
};

export default NoisyMarketers;
