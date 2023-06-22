import React from "react";
import NutraAccelerator from "../../../Assets/nutraAccelerator.png";

const JumpInto = () => {
  return (
    <div className="mt-5 layout-containers mx-auto d-md-flex justify-content-center align-items-center">
      <div className="me-md-5">
        <p className="letter-1 fs-2 text-gray fw-800 text-center text-uppercase">
          Ready To Jump Into The
        </p>
        <p className="leading-20 fs-1 text-green fw-900 text-center text-uppercase">
          NutraFunnels
        </p>
        <p className="leading-20 fs-1 text-green fw-900 text-center text-uppercase mb-4">
          Accelerator?
        </p>
        <div className="d-flex justify-content-center pt-2">
          <button className="btn-secondary-red fs-4 fw-700">Yes, I'm in</button>
        </div>
        <p className="text-gray fs-6 fw-800 text-center text-capitalize mt-2">
          Join For Free - No Charge!
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img width="70%" className="max-w-xs" src={NutraAccelerator} alt="" />
      </div>
    </div>
  );
};

export default JumpInto;
