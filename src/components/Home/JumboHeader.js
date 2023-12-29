import React from "react";
import captainJackSparrow from "../../Images/captain-jack-sparrow.png";
import { NavLink } from "react-router-dom";

function JumboHeader() {
  return (
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <img
        src={captainJackSparrow}
        className="bi mt-4 mb-4"
        width="100"
        height="100"
      />
      <h1 class="text-body-emphasis">FusionMinds Guild</h1>
      <p class="col-lg-8 mx-auto fs-5 text-muted">
        Meet our talented quartet of friends, each excelling in their
        professional domains: Aftab, the innovative software developer; Parvej,
        the adept CCTV and printer specialist; Mahir, the skilled furniture
        artisan; and Mahefuz, the creative mind behind clothing styling.
        Together, they bring a diverse set of skills to cater to your
        technological, aesthetic, and functional needs.
      </p>
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
