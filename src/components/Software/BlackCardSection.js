import React from "react";

function BlackCardSection() {
  const cardData = [
    {
      cardClassName: "h-100 p-5 text-bg-dark rounded-3",
      cardHeading: "Change the background",
      cardPara:
        "Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.",
    },
    {
      cardClassName: "h-100 p-5 bg-body-tertiary border rounded-3",
      cardHeading: "Add borders",
      cardPara:
        "Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.",
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
              <button class="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlackCardSection;
