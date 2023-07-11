import React from 'react'
import FoodPicture from "@/app/_home_/components/FoodPicture";
import food from "@/app/_home_/images/food.jpg";
import HomeTitle from "@/app/_home_/components/HomeTitle";
function HomeMain() {
    return (
        <div className="HomeWrapper">
            <FoodPicture food={food}/>
            <HomeTitle/>
        </div>
    )
}

export default HomeMain
