import React, { JSX } from "react";
import Image from "next/image";
import { Dish } from "@/app/classes";

const FoodItem: ({ recipe }: { recipe: Dish }) => JSX.Element = ({
  recipe,
}) => {
  return (
    <a href={"/dish/" + recipe.id} className="DecorLink">
      <div className="PopularItem">
        <Image
          unoptimized={true}
          loader={() => recipe.img}
          className="PopularItemImg"
          src={recipe.img}
          alt={recipe.title}
          width={200}
          height={200}
        />
        <p className="FoodText">{recipe.title}</p>
      </div>
    </a>
  );
};

export default FoodItem;
