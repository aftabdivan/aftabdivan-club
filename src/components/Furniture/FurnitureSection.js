import React from "react";

function FurnitureSection(props) {
  return (
    <div>
      <div class="row featurette mt-4">
        <div class={props.className}>
          <h2 class="featurette-heading fw-normal lh-1">
            First featurette heading.{" "}
            <span class="text-body-secondary">It’ll blow your mind.</span>
          </h2>
          <p class="lead">{props.furniturePara}</p>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded"
            width="500"
            height="500"
            src={props.srcImage}
          />
        </div>
      </div>
      <hr class="featurette-divider" />
    </div>
  );
}

export default FurnitureSection;
