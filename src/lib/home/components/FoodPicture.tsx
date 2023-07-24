import React, { JSX } from "react";
import Image from "next/image";

const FoodPicture: ({ food }: { food: string }) => JSX.Element = ({ food }) => {
  return (
    <div className="FoodWrapper">
      <Image
        unoptimized={true}
        loader={() => food}
        src={food}
        alt={"food"}
        className="FoodItem"
        width={100}
        height={100}
      />
    </div>
  );
};

export default FoodPicture;
