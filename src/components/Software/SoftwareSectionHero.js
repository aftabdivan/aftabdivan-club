import React from "react";
import {
  softwareSectionHeroButtonTitle,
  softwareSectionHeroPara,
  softwareSectionHeroTitle,
} from "../constants";

function SoftwareSectionHero() {
  return (
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{softwareSectionHeroTitle}</h1>
        <p class="col-md-8 fs-4">{softwareSectionHeroPara}</p>
        <button
          class="btn btn-primary btn-lg"
          type="button"
          onClick={() =>
            window.open("https://aftabdivan.github.io/aftabdivan-portfolio/")
          }
        >
          {softwareSectionHeroButtonTitle}
        </button>
      </div>
    </div>
  );
}

export default SoftwareSectionHero;
