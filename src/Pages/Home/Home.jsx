import React from "react";
import Logo from "../../Assets/logo.svg";
import SearchIcon from "../../Assets/Search.svg";
import MenuIcon from "../../Assets/menu.svg";
import ImageIcon from "../../Assets/Image.svg";
import LocationIcon from "../../Assets/Location.svg";
import VideoIcon from "../../Assets/Video.svg";
import VoiceIcon from "../../Assets/Voice.svg";

const BTest = () => {
  return (
    <div class="min-vh-100">
      <div class="max-w-sm mx-auto bg-light">
        <div class="position-fixed w-100 max-w-sm d-flex justify-content-between align-items-center bg-violet-500 px-4 py-3">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div class="d-flex align-items-center">
            <img class="me-3" src={SearchIcon} alt="" />
            <button class="btn btn-white text-violet-500 px-2 rounded-3">
              Make a report
            </button>
            <img class="ms-3" src={MenuIcon} alt="" />
          </div>
        </div>
        <div class="pb-3 px-3 pt-6">
          <div class="bg-white rounded-3">
            <div class="bg-violet-500 pt-1 border-tl-3 w-25"></div>
            <div class="px-3 py-4">
              <h5 class="fw-bold text-blue-900">
                Report a food safety issue Protect others!
              </h5>
              <p class="fw-600 text-blue-900 mt-2 mb-2">I am reporting</p>
              <div class="d-flex overflow-auto pb-2 me-n5">
                <div class="bg-light border border-grey-300 py-1 px-3 rounded me-1">
                  <p class="text-blue-900 text-nowrap">Nausea</p>
                </div>
                <div class="bg-light border border-grey-300 py-1 px-3 rounded me-1">
                  <p class="text-blue-900 text-nowrap">Diarrhea</p>
                </div>
                <div class="bg-light border border-grey-300 py-1 px-3 rounded me-1">
                  <p class="text-blue-900 text-nowrap">Vomiting</p>
                </div>
                <div class="bg-light border border-grey-300 py-1 px-3 rounded me-1">
                  <p class="text-blue-900 text-nowrap">Something else</p>
                </div>
              </div>
              <div class="d-flex justify-content-between mt-2 mb-1">
                <p class="fw-600 text-blue-900">Got sick from</p>
                <p class="text-muted fw-600 text-grey-700">I’m not sure</p>
              </div>
              <input
                type="text"
                placeholder="New York"
                class="form-control rounded border-grey-300 text-blue-900"
              />
              <div class="rounded-3 border border-grey-300 mt-4 py-2 px-2">
                <textarea
                  placeholder="What happened and when? Describe your situation"
                  class="w-100 text-area mb-4"
                  rows={2}
                />
                <div class="d-flex mb-2">
                  <img src={ImageIcon} alt="" />
                  <img class="ms-4" src={VideoIcon} alt="" />
                  <img class="ms-4" src={LocationIcon} alt="" />
                  <img class="ms-4" src={VoiceIcon} alt="" />
                </div>
                <div class="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    class="form-check-label text-blue-900"
                    for="flexSwitchCheckChecked"
                  >
                    Make a private
                  </label>
                </div>
              </div>
              <button class="btn btn-violet-500 text-white px-3 mt-3 rounded-3">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTest;
