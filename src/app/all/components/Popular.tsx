import React, {JSX} from 'react'
import {Dish} from "@/app/classes";
import FoodItem from "@/app/all/components/FoodItem";

const Popular: ({popular} : {popular: Dish[]}) => JSX.Element = ({popular}) => {

    return (
        <div>
            <div className="PopularTitle">All sets</div>
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
