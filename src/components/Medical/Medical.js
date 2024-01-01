import React from "react";
import MedicalHeroSection from "./MedicalHeroSection";
import MedicalCardSection from "./MedicalCardSection";
import MedicalDoctorSection from "./MedicalDoctorSection";

function Medical() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <MedicalHeroSection />
      <MedicalCardSection />
      <MedicalDoctorSection />
    </div>
  );
}

export default Medical;
