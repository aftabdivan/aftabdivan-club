import React from "react";
import NatureDemo from "../../Images/nature-demo.jpg";
import AboutLegends from "./AboutLegends";
import { aboutSectionHeroHeading, aboutSectionHeroPara } from "../constants";

function About() {
  return (
    <div>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">
          {aboutSectionHeroHeading}
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{aboutSectionHeroPara}</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://aftabdivan.github.io/aftabdivan-portfolio/"
                )
              }
              class="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Creator of the web
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              onClick={() =>
                window.open(
                  "https://aftabdivan.github.io/aftabdivan-portfolio/"
                )
              }
            >
              Mind behind it
            </button>
          </div>
        </div>
        <div class="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div class="container px-5">
            <img
              src={NatureDemo}
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <AboutLegends />
    </div>
  );
}

export default About;
