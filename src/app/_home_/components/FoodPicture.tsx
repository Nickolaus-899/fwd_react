import React from 'react'
import food from '@/app/_home_/images/food.jpg'
import Image from "next/image";

function FoodPicture() {

    return (
        <div className="FoodWrapper">
            <Image src={food} alt={"food"} className="FoodItem"/>
        </div>
    )
}

export default FoodPicture
