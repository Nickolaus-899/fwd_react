import React from 'react'
import FoodPicture from "@/lib/home/components/FoodPicture";
import food from "@/lib/home/images/food.jpg";
import HomeTitle from "@/lib/home/components/HomeTitle";
function HomeMain() {
    return (
        <div className="HomeWrapper">
            <FoodPicture food={food}/>
            <HomeTitle/>
        </div>
    )
}

export default HomeMain
