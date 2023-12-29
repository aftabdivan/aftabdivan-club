import React from "react";
import ClothesHeroSection from "./ClothesHeroSection";
import ClothesSuiteSection from "./ClothesSuiteSection";

function Clothes() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <ClothesHeroSection />
      <ClothesSuiteSection />
    </div>
  );
}

export default Clothes;
