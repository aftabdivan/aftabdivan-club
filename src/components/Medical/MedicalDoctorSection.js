import React from "react";
import DoctorImage from "../../Images/Doctor-image.jpg";
import {
  medicalDoctorSectionHeading,
  medicalDoctorSectionPara,
} from "../constants";

function MedicalDoctorSection() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={DoctorImage}
            class="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {medicalDoctorSectionHeading}
          </h1>
          <p class="lead">{medicalDoctorSectionPara}</p>
        </div>
      </div>
    </div>
  );
}

export default MedicalDoctorSection;
