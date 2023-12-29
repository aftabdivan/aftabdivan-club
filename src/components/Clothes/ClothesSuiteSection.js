import React from "react";
import BlueSuite from "../../Images/blue-suite.jpg";
import BlackSuite from "../../Images/black-suite.jpg";

function ClothesSuiteSection({ customeClassName }) {
  const suitesData = [
    {
      customeClassName:
        "row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5",
      srcImage: BlueSuite,
      imageTitle: '"Azure Elegance: The Blue Suit Collection"',
      imagePara: `Step into sophistication with our exclusive "Azure Elegance"
            collection, where the timeless allure of a blue suit takes center
            stage. Our featured model embodies the epitome of refined style,
            showcasing the versatility and charm that a well-tailored blue suit
            brings to any occasion.`,
    },
    {
      customeClassName:
        "row flex-lg-row align-items-center justify-content-center g-5 py-5",
      srcImage: BlackSuite,
      imageTitle: `"Eternal Noir: The Black Suit Affair"`,
      imagePara: `Unveil the epitome of timeless style with our "Eternal Noir"
        collection, featuring a distinguished model adorned in sleek black
        suits. A symbol of sophistication and versatility, the black suit
        transcends trends, offering a canvas for endless style
        possibilities.`,
    },
  ];
  return (
    <>
      {suitesData.map((suiteItem) => {
        return (
          <div class={suiteItem.customeClassName}>
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={suiteItem.srcImage}
                class="d-block mx-lg-auto img-fluid rounded"
                alt="Bootstrap Themes"
                width="300"
                height="300"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                {suiteItem.imageTitle}
              </h1>
              <p class="lead">{suiteItem.imagePara}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ClothesSuiteSection;
