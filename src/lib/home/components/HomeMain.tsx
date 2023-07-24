import React from "react";
import FoodPictureHome from "@/lib/home/components/FoodPictureHome";
import food from "@/lib/home/images/food.jpg";
import HomeTitle from "@/lib/home/components/HomeTitle";
function HomeMain() {
  return (
    <div className="HomeWrapper">
      <FoodPictureHome food={food} />
      <HomeTitle />
    </div>
  );
}

export default HomeMain;
