import React from "react";
import Jack from "../../Images/jack.jpg";
import { NavLink } from "react-router-dom";
import { clothesSectionHeroHeading, clothesctionHeroPara } from "../constants";

function ClothesHeroSection() {
  return (
    <div class="px-4 py-5 my-2 text-center">
      <img
        class="d-block mx-auto mb-4 rounded-circle"
        src={Jack}
        alt=""
        width="72"
        height="57"
      />
      <h1 class="display-5 fw-bold text-body-emphasis">
        {clothesSectionHeroHeading}
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{clothesctionHeroPara}</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <NavLink to={"/about"}>
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Want to say something
            </button>
          </NavLink>
          <NavLink to={"/about"}>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Connect with us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ClothesHeroSection;
