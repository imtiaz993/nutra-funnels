import React from 'react'
import Logo from "../../../Assets/logo.png";
import HeroImage from "../../../Assets/hero.png";
import HeroDetail from "../../../Assets/heroDetail.png";

const Hero = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${HeroImage})`,
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
  )
}

export default Hero