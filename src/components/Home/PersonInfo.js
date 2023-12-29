import React from "react";
import Jack from "../../Images/jack.jpg";
import JackKnife from "../../Images/jack-snife.jpg";
import BoyTshirt from "../../Images/boy-tshirt.jpg";
import BoyJacket from "../../Images/boy-jacket.jpg";
import JumboHeader from "./JumboHeader";

function PersonInfo() {
  const personInfoData = [
    {
      imageName: Jack,
      personName: "Mahir Divan",
      expertise:
        "A professional furniture specialist combines expertise in design, craftsmanship.",
    },
    {
      imageName: BoyJacket,
      personName: "Parvej Divan",
      expertise:
        "A professional CCTV and printer specialist possesses advanced technical skills.",
    },
    {
      imageName: BoyTshirt,
      personName: "Mahefuz Divan",
      expertise:
        "A professional clothes designer and stylist brings a unique blend of creative flair and fashion expertise.",
    },
    {
      imageName: JackKnife,
      personName: "Aftab Divan",
      expertise:
        "A professional software developer leverages advanced coding skills and problem-solving.",
    },
  ];

  return (
    <div className="container">
      <JumboHeader />
      <div class="row text-center mt-5 mx-auto">
        {personInfoData.map((person) => {
          return (
            <div class="col-lg-3">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src={person.imageName}
              />
              <h2 class="fw-normal">{person.personName}</h2>
              <p>{person.expertise}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonInfo;
