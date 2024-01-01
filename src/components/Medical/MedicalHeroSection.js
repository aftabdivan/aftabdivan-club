import React from "react";
import { NavLink } from "react-router-dom";
import {
  medicalSectionHeroHeading,
  medicalSectionHeroPara,
} from "../constants";

function MedicalHeroSection() {
  return (
    <div>
      <h1 class="display-5 fw-bold text-body-emphasis">
        {medicalSectionHeroHeading}
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{medicalSectionHeroPara}</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <NavLink to={"/about"}>
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Connect with us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MedicalHeroSection;
