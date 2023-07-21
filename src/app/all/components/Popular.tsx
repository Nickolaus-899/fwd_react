import React, {JSX, useEffect, useState} from 'react'
import {API, Dish, emptyArrayShort, emptyClientsArray, emptyDishesArray, nullClient, randomAPI} from "@/app/classes";
import Image from "next/image";
import FoodItem from "@/app/all/components/FoodItem";
import {fetchData} from "@/app/fetch";

const Popular: ({popular} : {popular: Dish[]}) => JSX.Element = ({popular}) => {

    return (
        <div>
            <div className="PopularTitle">Some sets</div>
            <li className="CategoryList PopularList">
            {
                popular.map(item => {
                    return (
                        <FoodItem recipe={item} key={item.id}/>
                    )
                })
            }
            </li>
        </div>
    )
}

export default Popular
