import React, {JSX} from 'react'
import Image from "next/image";
import {Dish} from "@/app/classes";

const FoodItemInMenu: ({dish} : {dish: Dish }) => JSX.Element = ({dish}) => {
    return (
        <div className="dish1 row">
            <div className="col-md-3">
                <img className='svg' width={140} height={82.5} src={dish.img} alt={"food"}/>
            </div>
            <div className="col-md-6">
                <h2 className="dish_header">{dish.title}</h2>
                <h3 className="calories"> Calorific value: {dish.calories} kk </h3>
            </div>
            <div className="price col-md-3">
                <h2>{dish.price} rub </h2>
            </div>
        </div>
    )
}

export default FoodItemInMenu
