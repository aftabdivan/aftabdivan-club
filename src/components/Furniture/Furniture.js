import React from "react";
import jack from "../../Images/jack.jpg";
import Bedroom from "../../Images/bedroom-furniture.jpg";
import Kitchen from "../../Images/kitchen-furniture.jpg";
import Whole from "../../Images/whole-furniture.jpg";
import LuxuryBedroom from "../../Images/luxury-bedroom.jpg";
import Mirror from "../../Images/mirror-furniture.jpg";
import FurnitureSection from "./FurnitureSection";
import DinningTable from "../../Images/dinning-table.jpg";

function Furniture() {
  const furnitureData = [
    {
      bedroomPara:
        "Step into a bedroom meticulously crafted by an excellent artisan, where every detail exudes a sense of artistry and functionality. The bed, the focal point of the room, stands as a testament to the maker's craftsmanship, combining both style and comfort seamlessly. The furniture, each piece designed and placed with precision, creates a harmonious flow, transforming the bedroom into a sanctuary of relaxation. The color palette chosen reflects an acute sense of aesthetics, creating an atmosphere that is both soothing and inviting. From the carefully selected fabrics to the thoughtfully placed decor, every element in this bedroom bears the mark of an excellent person who understands the art of creating spaces that transcend mere functionality and embrace a sense of refined living.",
    },
    {
      mirrorPara:
        "Behold a mirror that transcends mere reflection and stands as a testament to the artistry of its creator. Meticulously crafted by an excellent artisan, this mirror is more than just a reflective surface; it is a work of exceptional skill and passion. The frame, intricately designed with attention to detail, showcases the maker's dedication to perfection. Every curve and contour tells a story of craftsmanship, transforming the mirror into a piece of functional art. The choice of materials reflects not only durability but also a keen eye for aesthetics, ensuring that this mirror is not just a utilitarian object but an exquisite addition to any space. As you gaze into its reflective surface, you not only see your image but also the reflection of the exceptional talent that brought this mirror to life.",
    },
    {
      dinningTable:
        "Gather around a dining table that embodies the essence of exceptional craftsmanship, a creation born from the hands of a true artisan. This dining table, meticulously crafted by an excellent person, is more than just a piece of furniture; it's a testament to the marriage of functionality and artistry. The table's surface, smooth and inviting, bears witness to the hours of dedication poured into its creation. The wood, carefully selected for both its quality and aesthetics, tells a story of reverence for natural materials. The design, a harmonious blend of form and function, transforms the dining area into a space where every meal is an experience. As you sit around this table, you not only enjoy its practicality but also partake in the legacy of an excellent craftsman whose passion for woodworking has given life to a dining masterpiece.",
    },
  ];
  return (
    <div class="container marketing">
      <div className="container px-4 py-5">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 mx-auto">
          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${Bedroom})`,
              }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${Kitchen})`,
              }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                    <small>Pakistan</small>
                  </li>
                  <li class="d-flex align-items-center">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${Whole})`,
              }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                    <small>California</small>
                  </li>
                  <li class="d-flex align-items-center">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FurnitureSection
        className={"col-md-7"}
        srcImage={LuxuryBedroom}
        furniturePara={furnitureData[0].bedroomPara}
      />
      <FurnitureSection
        className={"col-md-7 order-md-2"}
        srcImage={Mirror}
        furniturePara={furnitureData[1].mirrorPara}
      />
      <FurnitureSection
        className={"col-md-7"}
        srcImage={DinningTable}
        furniturePara={furnitureData[2].dinningTable}
      />
    </div>
  );
}

export default Furniture;
