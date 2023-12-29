import React from "react";
import jack from "../../Images/jack.jpg";
import LuxuryBedroom from "../../Images/luxury-bedroom.jpg";
import Mirror from "../../Images/mirror-furniture.jpg";
import FurnitureSection from "./FurnitureSection";
import DinningTable from "../../Images/dinning-table.jpg";
import CardImage from "./CardImage";

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
      <CardImage />
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
