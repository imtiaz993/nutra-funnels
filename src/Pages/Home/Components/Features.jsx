import React from 'react'
import MLM from "../../../Assets/mlm.png";
import FBAD from "../../../Assets/fbAd.png";
import PPC from "../../../Assets/ppc.png";
import Inventory from "../../../Assets/inventory.png";
import Affiliate from "../../../Assets/affiliate.png";
import Wordpress from "../../../Assets/wordpress.png";

const Features = () => {
  return (
    <div className="layout-container mx-auto">
    <div className="d-flex justify-content-center position-relative">
      <button className="bottom-20 position-absolute btn-secondary-red fs-4 fw-700">
        Yes, I'm in
      </button>
    </div>
    <p className="text-gray fs-6 fw-800 text-center text-capitalize mt-4 pt-2">
      Join For Free - No Charge!
    </p>
    <p className="max-w-xs mx-auto fs-3 text-green fw-900 text-center text-uppercase">
      The Best Part is that there’s
    </p>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-5">
      <div className="d-flex justify-content-center flex-column">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <img width="80px" src={MLM} alt="" />
          <p className="text-center text-uppercase fw-700 leading-20 fs-5">
            MLM RECRUITING{" "}
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <img width="80px" src={FBAD} alt="" />
          <p className="text-center text-uppercase fw-700 leading-20 fs-5">
            FACEBOOK ADS
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <img width="80px" src={PPC} alt="" />
          <p className="text-center text-uppercase fw-700 leading-20 fs-5">
            SEO/PPC/Youtube
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <p className="text-green text-center text-uppercase fw-900 fs-title">
            NO
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <img width="80px" src={Inventory} alt="" />
          <p className="text-center text-uppercase fw-700 leading-20 fs-5">
            {" "}
            No Buying Inventory
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <img width="80px" src={Affiliate} alt="" />
          <p className="text-center text-uppercase fw-700 leading-20 fs-5">
            affiliate Marketing
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "240px", height: "150px" }}
        >
          <img width="80px" src={Wordpress} alt="" />
          <p className="text-center text-uppercase fw-700 leading-20 fs-5">
            Wordpress or Blogging
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features