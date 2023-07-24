import React, {JSX} from 'react'
import {Dish} from "@/app/classes";
import Image from "next/image";

const FoodItemInList: ({dish, openConfirmPageHandler} :
                           {dish: Dish, openConfirmPageHandler: Function})
    => JSX.Element = ({dish, openConfirmPageHandler}) => {
    return (
        <div className="FoodItemInListPosition">
            <div className="CircleButtonPosition">
                <button className="CrossCircleButton" onClick={() => openConfirmPageHandler(dish)}>x</button>
            </div>

            <div className="FoodItemInList">
                <Image
                    unoptimized={true}
                    loader={() => dish.img}
                    className="FoodItemInListImage"
                    src={dish.img}
                    alt={dish.title}
                    height={300}
                    width={300}
                />
                <div className="FoodItemInListInfo">
                    <h1>{dish.title}</h1>
                    {/*<div>id: {dish.id}</div>*/}
                    <div>price: {dish.price}</div>
                    <div>calories: {dish.calories}</div>
                    {
                        dish.cuisine !== "" ? (
                            <div>cuisine: {dish.cuisine}</div>
                        ) : null
                    }

                    {
                        dish.vegetarian ? (
                            <div className="VeggieText">Vegetarian!</div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default FoodItemInList
