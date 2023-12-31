import React, { JSX } from "react";
import { Dish } from "@/app/classes";
import FoodItem from "@/app/all/components/FoodItem";

const Veggie: ({ veggie }: { veggie: Dish[] }) => JSX.Element = ({
  veggie,
}) => {
  return (
    <div>
      <div className="PopularTitle">Vegetarian sets</div>
      <li className="CategoryList PopularList">
        {veggie.map((recipe) => {
          return <FoodItem recipe={recipe} key={recipe.id} />;
        })}
      </li>
    </div>
  );
};

export default Veggie;
