import React from "react";

function BlackCardSection() {
  const cardData = [
    {
      cardClassName: "h-100 p-5 text-bg-dark rounded-3",
      cardHeading: "Embark on a Digital Odyssey",
      cardPara:
        "Welcome to a realm where innovation knows no bounds. Our software development expertise is your gateway to a digital odyssey, where every line of code propels your vision into new dimensions. At D-Club Connect, we transcend conventional boundaries, crafting solutions that redefine excellence.",
    },
    {
      cardClassName: "h-100 p-5 bg-body-tertiary border rounded-3",
      cardHeading: "Crafting Tomorrow's Digital Experiences",
      cardPara:
        "Step into the future with D-Club Connect, where software development becomes an art form. We specialize in transforming concepts into high-performance, user-centric solutions that redefine digital excellence. Our team of adept developers is dedicated to not just meeting but surpassing your expectations.",
    },
  ];
  return (
    <div class="row align-items-md-stretch">
      {cardData.map((cardItem) => {
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
