import React from "react";
import Jack from "../Images/jack.jpg";
import JackKnife from "../../src/Images/jack-snife.jpg";
import BoyTshirt from "../../src/Images/boy-tshirt.jpg";
import BoyJacket from "../../src/Images/boy-jacket.jpg";
import JumboHeader from "./JumboHeader";

function PersonInfo() {
  return (
    <div className="container">
      <JumboHeader />
      <div class="row text-center mt-5 mx-auto">
        <div class="col-lg-3">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={Jack}
          />
          <h2 class="fw-normal">Mahir Divan</h2>
          <p>
            A professional furniture specialist combines expertise in design,
            craftsmanship.
          </p>
        </div>
        <div class="col-lg-3">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={BoyJacket}
          />
          <h2 class="fw-normal">Parvej Divan</h2>
          <p>
            A professional CCTV and printer specialist possesses advanced
            technical skills.
          </p>
        </div>
        <div class="col-lg-3">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={BoyTshirt}
          />
          <h2 class="fw-normal">Mahefuz Divan</h2>
          <p>
            A professional clothes designer and stylist brings a unique blend of
            creative flair and fashion expertise.
          </p>
        </div>
        <div class="col-lg-3">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={JackKnife}
          />
          <h2 class="fw-normal">Aftab Divan</h2>
          <p>
            A professional software developer leverages advanced coding skills
            and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
