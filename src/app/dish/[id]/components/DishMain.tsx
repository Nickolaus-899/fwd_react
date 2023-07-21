"use client"
import React, {useEffect, useState} from 'react'
import {addToMenuFormType, nullClient, nullDish, nullFunction} from "@/app/classes";
import FoodPicture from "@/lib/home/components/FoodPicture";
import "@/lib/home/css/index.css"
import "@/lib/home/css/bootstrap.min.css"
import {LuVegan} from "react-icons/lu";
import MyButton from "@/lib/home/components/MyButton";
import {addDish, fetchData} from "@/app/fetch";
import {userId} from "@/app/user";
import GeneralForm from "@/lib/form/components/GeneralForm";

function DishMain({params} : {params : {id: string}}) {
    const [details, setDetails] = useState(nullDish);
    const [restaurantName, setRestaurantName] = useState("")
    
    const [client, setClient] = useState(nullClient)

    const [showAddingToMenuForm, setShowAddingToMenuForm] =
        useState(false)

    const openFormHandler = () => {
        fetchData().then(clients => {
            for (let i = 0; i < clients.length; i++) {
                if (clients[i].id === userId) {
                    setClient(clients[i])
                    break
                }
            }
        })
        setShowAddingToMenuForm(true)
    }

    const addDishToMenuHandler = () => {
        addDish(client, details)

        closeFormHandler()
    }

    const closeFormHandler = () => {
        setShowAddingToMenuForm(false)
    }

    const fetchDetails = async () => {
        fetchData().then(clients => {
            let applyBreak = false
            for (let i = 0; i < clients.length; i++) {
                if (applyBreak) {
                    break
                }
                if (!clients[i].admin) {
                    continue
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
            {
                showAddingToMenuForm ? (
                    <GeneralForm
                        type={addToMenuFormType}
                        setIsOpenForm={setShowAddingToMenuForm}
                        changeEventHandler={nullFunction}
                        createDishHandler={nullFunction}
                        closeFormHandler={closeFormHandler}
                        deleteDishHandler={nullFunction}
                        dish={nullDish}
                        addToMenuHandler={addDishToMenuHandler}
                    />
                ) : null
            }
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
                    <div className="ButtonsInDishPosition">
                        <a href={details.link} target="_blank">
                            <MyButton/>
                        </a>
                        <button className="MyButton" onClick={() => {openFormHandler()}}>
                            Add to My Menu
                        </button>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default DishMain
