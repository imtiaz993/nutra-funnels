import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import FiveSteps from "../../Assets/FiveSteps.png";
import DropShipping from "../../Assets/dropShipping.png";
import Failed from "../../Assets/failed.png";
import IsComplementary from "../../Assets/isComplementary.png";
import NoisyMarketer from "../../Assets/noisyMarketer.png";
import NutraAccelerator from "../../Assets/nutraAccelerator.png";
import Progress from "../../Assets/progress.png";
import Replace from "../../Assets/replace.png";
import SixDayAcc from "../../Assets/sixDayAcc.png";
import MLM from "../../Assets/mlm.png";
import FBAD from "../../Assets/fbAd.png";
import PPC from "../../Assets/ppc.png";
import Inventory from "../../Assets/inventory.png";
import Affiliate from "../../Assets/affiliate.png";
import Wordpress from "../../Assets/wordpress.png";
import Check from "../../Assets/check.png";
import Hero from "../../Assets/hero.png";
import HeroDetail from "../../Assets/heroDetail.png";
import "./Landing.css";

const Landing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-md">
            <div className="modal-body ">
              <h5
                className=" text-green text-center fw-900 fs-1 mb-4 mt-4"
                id="exampleModalLabel"
              >
                Sign Up
              </h5>
              <div className="px-4">
              <input placeholder="NAME" className="customInput"/>
              <input placeholder="Email" className="customInput"/>
              <input placeholder="Password" className="customInput"/>
              <input placeholder="+1 ( XXX ) XXX-XXXX" className="customInput"/>
              </div>
              <p className="text-gray fs-4 fw-700 text-center text-capitalize mt-4 pt-2 pb-2">
                Join For Free - No Charge!
              </p>
              <div className="d-flex justify-content-center position-relative">
                <button className="bottom-20 position-absolute btn-secondary-black fs-4 fw-700">
                  Join Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center  top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-center pt-4">
          <img width="250px" src={Logo} alt="" />
        </div>
        <p className="text-center text-white fs-title fw-900 mt-5 pt-5">
          Join Our
        </p>
        <p className="max-w-xs  mx-auto text-center text-white fw-500 fs-4">
          6-Day Health-Supplement Drop-Shipping Business Accelerator
        </p>
        <p className="max-w-sm px-5  mx-auto text-center text-white fw-700 fs-5 mt-5">
          Discover how to build a 6 figure Supplement Drop-shipping Business In
          6 Days WITHOUT Paying for Facebook Ads Or Traffic!
        </p>
        <p className="text-center text-white fw-900 fs-title pt-4 mb-5 pb-5">
          6 days!
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <img width="90%" src={HeroDetail} alt="" />
        </div>
        <div className="d-flex justify-content-center mt-5 pt-4 pb-5">
          <button
            className="btn-secondary-white fs-4 fw-700 mb-5"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Register Now!
          </button>
        </div>
      </div>
      <div>
        <h1 className="fs-title text-green fw-900 text-center mt-5">
          In only 6 days
        </h1>
        <p className="max-w-sm px-4 mx-auto fs-5 text-lightGray fw-600 text-center text-capitalize">
          we're going to show you exactly how you can copy our success
          step-by-step and build your own NutraFunnel that auto-dropships your
          own private label supplement for you
        </p>
        <h1 className="fs-title text-green fw-900 text-center mt-4">
          In just 6 days
        </h1>
        <p className="max-w-sm mx-auto fs-4 text-lightGray fw-600 text-center text-capitalize">
          We are going to guide you through this simple, 6 step program, that
          will help you to
        </p>
        <div className="leading-20 fs-4 text-gray fw-700 text-center text-capitalize mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img width="25px" src={Check} alt="" />
            <p className="mt-3 ms-2">Quit Your Job</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img width="25px" src={Check} alt="" />
            <p className="mt-3 ms-2">Retire</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img width="25px" src={Check} alt="" />
            <p className="mt-4 mt-md-3 ms-2">
              Get the life and Bank Account That You Want
            </p>
          </div>
        </div>
        <div className="bg-light pt-2 pb-4 px-3">
          <p className="fs-5 text-gray fw-900 text-center text-capitalize">
            How to become successful
          </p>
          <h1 className="letter-2 leading-0 pb-2 fs-title text-green fw-800 text-center text-uppercase">
            in 5 steps
          </h1>
          <div className="w-75 pt-4 mx-auto">
            <img src={FiveSteps} width="100%" alt="" />
          </div>
        </div>
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
        <div className="layout-container mx-auto">
          <p className="letter-1 fs-4 text-gray fw-800 text-center text-uppercase">
            In the 6-day
          </p>
          <p className="leading-0 fs-1 text-green fw-900 text-center text-uppercase">
            Accelerator
          </p>
          <p className="max-w-xs mx-auto fs-6 text-lightGray fw-600 text-center text-capitalize pt-3 pb-3">
            you'll get the support of hundreds of other people just like you
            that are looking to build profitable passive income streams online!
            These people will help encourage you every step of your online
            business journey.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img width="70%" src={SixDayAcc} alt="" />
          </div>
        </div>
        <div className="layout-container mx-auto mt-4">
          <div className="d-flex justify-content-center position-relative">
            <button className="btn-secondary-red fs-4 fw-700">
              Yes, I'm in
            </button>
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
            <img width="70%" src={Failed} alt="" />
          </div>
        </div>
        <div className="layout-container mx-auto mt-5 pt-4">
          <p className="max-w-sm mx-auto fs-4 leading-20 fw-600 text-center text-capitalize">
            Are looking to transition away from a J-O-B and{" "}
            <span className="text-green fw-800">replace</span> your primary
            income source
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img width="70%" src={Replace} alt="" />
          </div>
        </div>
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
            automating it and working from the comfort of your own home
            part-time.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img width="70%" src={DropShipping} alt="" />
          </div>
        </div>
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
              <span className="text-green fw-700">guidance</span> to filter all
              the other{" "}
              <span className="fs-4 text-green fw-800">"noisy marketers"</span>{" "}
            </p>
            <p className="max-w-xs text-left leading-0 mx-auto fs-5 text-lightGray fw-600 text-capitalize">
              {" "}
              telling you what to do.
            </p>
          </div>
        </div>
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
            <img width="90%" src={Progress} alt="" />
          </div>
        </div>
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
              <button className="btn-secondary-red fs-4 fw-700">
                Yes, I'm in
              </button>
            </div>
            <p className="text-gray fs-6 fw-800 text-center text-capitalize mt-2">
              Join For Free - No Charge!
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img
              width="70%"
              className="max-w-xs"
              src={NutraAccelerator}
              alt=""
            />
          </div>
        </div>
        <p className="text-gray text-center text-capitalize mt-5">
          Copyrights © 2022 NutraFunnels. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Landing;
