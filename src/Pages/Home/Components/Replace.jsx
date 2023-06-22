import React from "react";
import ReplaceImage from "../../../Assets/replace.png";

const Replace = () => {
  return (
    <div className="layout-container mx-auto mt-5 pt-4">
      <p className="max-w-sm mx-auto fs-4 leading-20 fw-600 text-center text-capitalize">
        Are looking to transition away from a J-O-B and{" "}
        <span className="text-green fw-800">replace</span> your primary income
        source
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <img width="70%" src={ReplaceImage} alt="" />
      </div>
    </div>
  );
};

export default Replace;
