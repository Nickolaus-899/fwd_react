import React, {JSX} from 'react'
import {Dish} from "@/app/classes";
// import Image from "next/image";

const FoodItemInList: ({dish} : {dish: Dish}) => JSX.Element = ({dish}) => {
    return (
        <div className="FoodItemInList FoodItemInListPosition">
            <img className="FoodItemInListImage" src={dish.img} alt={dish.title} height={300} width={300}/>
            <div className="FoodItemInListInfo">
                <h1>{dish.title}</h1>
                {/*<div>id: {dish.id}</div>*/}
                <div>price: {dish.price}</div>
                <div>calories: {dish.calories}</div>
                {
                    dish.vegetarian ? (
                        <div className="VeggieText">Vegetarian!</div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default FoodItemInList
