import React from "react";
import captainJackSparrow from "../../Images/captain-jack-sparrow.png";
import { NavLink } from "react-router-dom";
import { homeSectionHeroHeading, homeSectionHeroPara } from "../constants";

function JumboHeader() {
  return (
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <img
        src={captainJackSparrow}
        className="bi mt-4 mb-4"
        width="100"
        height="100"
      />
      <h1 class="text-body-emphasis">{homeSectionHeroHeading}</h1>
      <p class="col-lg-8 mx-auto fs-5 text-muted">{homeSectionHeroPara}</p>
      <div class="d-inline-flex gap-2 mb-5">
        <NavLink to={"/about"}>
          <button
            class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            Click to connect
            <i class="bi bi-arrow-right ms-2 pt-1" width="24" height="24" />
          </button>
        </NavLink>
        <NavLink to={"/furniture"}>
          <button
            class="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button"
          >
            See our businesses
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default JumboHeader;
