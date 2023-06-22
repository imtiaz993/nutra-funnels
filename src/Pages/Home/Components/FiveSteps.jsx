import React from "react";
import FiveStepsImage from "../../../Assets/FiveSteps.png";

const FiveSteps = () => {
  return (
    <div className="bg-light pt-2 pb-4 px-3">
      <p className="fs-5 text-gray fw-900 text-center text-capitalize">
        How to become successful
      </p>
      <h1 className="letter-2 leading-0 pb-2 fs-title text-green fw-800 text-center text-uppercase">
        in 5 steps
      </h1>
      <div className="w-75 pt-4 mx-auto">
        <img src={FiveStepsImage} width="100%" alt="" />
      </div>
    </div>
  );
};

export default FiveSteps;
