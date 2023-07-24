import React, { JSX } from "react";
import Image, { StaticImageData } from "next/image";
// import "./../css/index.css"

const FoodPictureHome: ({
  food,
}: {
  food: string | StaticImageData;
}) => JSX.Element = ({ food }) => {
  return (
    <div className="FoodWrapper">
      <Image src={food} alt={"food"} className="FoodItem" />
    </div>
  );
};

export default FoodPictureHome;
