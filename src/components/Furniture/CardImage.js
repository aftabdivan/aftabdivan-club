import React from "react";
import Bedroom from "../../Images/bedroom-furniture.jpg";
import Kitchen from "../../Images/kitchen-furniture.jpg";
import Whole from "../../Images/whole-furniture.jpg";
import Cat from "../../Images/cute-cat.jpg";

function CardImage() {
  const cardData = [
    {
      image: Bedroom,
      title: "Sunny Chair Elegance",
      location: "Earth",
      day: "3d",
    },
    {
      image: Kitchen,
      title: "Timeless Seating in Classic Kitchens",
      location: "Pakistan",
      day: "4d",
    },
    {
      image: Whole,
      title: "Chic Comfort in a Snapshot.",
      location: "California",
      day: "5d",
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
                    <li class="me-auto">
                      <img
                        src={Cat}
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        class="rounded-circle border border-white"
                      />
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <i
                        class="bi bi-globe-americas me-2"
                        width="1em"
                        height="1em"
                      />
                      <small>{cardItem.location}</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <i
                        class="bi bi-calendar3 me-2"
                        width="1em"
                        height="1em"
                      ></i>
                      <small>{cardItem.day}</small>
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

export default CardImage;
