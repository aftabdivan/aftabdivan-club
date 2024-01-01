import React from "react";
import { blackCardData } from "../constants";

function BlackCardSection() {
  return (
    <div class="row align-items-md-stretch">
      {blackCardData.map((cardItem) => {
        return (
          <div class="col-md-6">
            <div class={cardItem.cardClassName}>
              <h2>{cardItem.cardHeading}</h2>
              <p>{cardItem.cardPara}</p>
              <button
                class="btn btn-outline-light"
                type="button"
                onClick={() =>
                  window.open(
                    "https://aftabdivan.github.io/aftabdivan-portfolio/"
                  )
                }
              >
                Technlogogies we worked
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlackCardSection;
