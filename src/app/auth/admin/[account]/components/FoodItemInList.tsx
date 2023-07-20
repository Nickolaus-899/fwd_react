import React, {JSX} from 'react'
import {Dish} from "@/app/classes";
import Image from "next/image";

const FoodItemInList: ({dish} : {dish: Dish}) => JSX.Element = ({dish}) => {
    return (
        <div>
            {dish.title}
            <img className="FoodItemInListImage" src={dish.img} alt={dish.title} height={300} width={300}/>
        </div>
    )
}

export default FoodItemInList
