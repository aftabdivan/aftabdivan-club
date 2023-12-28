import React from "react";
import Jack from "../../Images/jack.jpg";
import BlackSuite from "../../Images/black-suite.jpg";
import BlueSuite from "../../Images/blue-suite.jpg";

function Clothes() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4 rounded-circle"
          src={Jack}
          alt=""
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">
          Chic Threads Collection
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Welcome to our online haven of style and expression, where fashion
            meets individuality. Discover the latest trends and timeless
            classics in our curated collection of apparel that caters to diverse
            tastes and occasions. From casual chic to formal elegance, our
            carefully selected pieces reflect a commitment to quality, comfort,
            and aesthetics.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={BlueSuite}
            class="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            "Azure Elegance: The Blue Suit Collection"
          </h1>
          <p class="lead">
            Step into sophistication with our exclusive "Azure Elegance"
            collection, where the timeless allure of a blue suit takes center
            stage. Our featured model embodies the epitome of refined style,
            showcasing the versatility and charm that a well-tailored blue suit
            brings to any occasion.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>
      {/* change in first class */}
      <div class="row flex-lg-row align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={BlackSuite}
            class="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            "Eternal Noir: The Black Suit Affair"
          </h1>
          <p class="lead">
            Unveil the epitome of timeless style with our "Eternal Noir"
            collection, featuring a distinguished model adorned in sleek black
            suits. A symbol of sophistication and versatility, the black suit
            transcends trends, offering a canvas for endless style
            possibilities.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes;
