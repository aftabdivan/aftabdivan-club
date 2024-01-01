import React from "react";
import Medicine from "../../Images/Medicine.jpg";
import MedicineTablets from "../../Images/Medicine-Tablets.jpg";
import MedicalWeb from "../../Images/Medical-Web.jpg";

function MedicalCardSection() {
  const cardData = [
    {
      image: MedicineTablets,
      title: "Remedies",
      location: "India",
    },
    {
      image: MedicalWeb,
      title: "Healings",
      location: "London",
    },
    {
      image: Medicine,
      title: "Medicaments",
      location: "California",
    },
  ];

  return (
    <div className="container px-4 py-5">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 mx-auto">
        {cardData.map((cardItem) => {
          return (
            <div class="col">
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${cardItem.image})`,
                }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    {cardItem.title}
                  </h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="d-flex align-items-center me-3">
                      <i
                        class="bi bi-globe-americas me-2"
                        width="1em"
                        height="1em"
                      />
                      <small>{cardItem.location}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MedicalCardSection;
