"use client"
import React, {useEffect, useState} from 'react'
import {API, emptyVarComplex, nullDish} from "@/app/classes";
import FoodPicture from "@/lib/home/components/FoodPicture";
import "@/lib/home/css/index.css"
import "@/lib/home/css/bootstrap.min.css"
import {LuVegan} from "react-icons/lu";
import MyButton from "@/lib/home/components/MyButton";
import {fetchData} from "@/app/fetch";

function DishMain({params} : {params : {id: string}}) {
    const [details, setDetails] = useState(nullDish);
    const [restaurantName, setRestaurantName] = useState("")
    const fetchDetails = async () => {
        fetchData().then(clients => {
            let applyBreak = false
            for (let i = 0; i < clients.length; i++) {
                if (applyBreak) {
                    break
                }
                for (let j = 0; j < clients[i].dishes.length; j++) {
                    if (clients[i].dishes[j].id.toString() === params.id) {
                        setDetails(clients[i].dishes[j])
                        setRestaurantName(clients[i].admin_info.restaurant)
                        applyBreak = true
                        break
                    }
                }
            }
        })
    };

    useEffect(() => {
        fetchDetails();
    }, [params.id]);
    return (
        <div>
            <div className="DishTitle">
                {details.title}
                {
                    details.vegetarian ? (
                        <LuVegan className="DishTitleIcons"/>
                    ) : null
                }
            </div>

            <div className="DishDetailsWrapper">
                <FoodPicture food={details.img}/>
                <li className="DishCharsList">
                    <div className="SingleDetailWrapper">
                        <div className="ItemInDetail">
                            Calories: {details.calories}
                        </div>
                    </div>
                    <div className="SingleDetailWrapper">
                        <div className="ItemInDetail">Price: {details.price}</div>
                    </div>
                    {
                        details.cuisine !== "" ? (
                            <div className="SingleDetailWrapper">
                                <div className="ItemInDetail">Cuisine: {details.cuisine}</div>
                            </div>
                        ) : null
                    }
                    {
                        restaurantName !== "" ? (
                            <div className="SingleDetailWrapper">
                                Restaurant: {restaurantName}
                            </div>
                        ) : null
                    }
                    <div className="SingleDetailWrapper">
                        <a href={details.link} target="_blank">
                            <MyButton/>
                        </a>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default DishMain
