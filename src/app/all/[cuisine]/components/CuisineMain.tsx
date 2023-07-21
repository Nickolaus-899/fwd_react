"use client"
import React, {useEffect, useState} from 'react'
import {emptyDishesArray} from "@/app/classes";
import Image from "next/image";
import FoodItem from "@/app/all/components/FoodItem";
import {fetchData} from "@/app/fetch";

const CUISINE_NUMBER: number = 12

function CuisineMain({params} : {params : {cuisine: string}}) {
    const [cuisine, setCuisine] = useState(emptyDishesArray);

    const getCuisine = async (name: string) => {
        let cuisineCounter: number = 0
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
                    if (cuisineCounter === CUISINE_NUMBER) {
                        applyBreak = true
                        break
                    }
                    if (clients[i].dishes[j].cuisine === params.cuisine) {
                        setCuisine(prevState => [...prevState, clients[i].dishes[j]])
                        cuisineCounter = cuisineCounter + 1
                    }
                }
            }
        })
    };


    useEffect(() => {
        setCuisine(emptyDishesArray)
        getCuisine(params.cuisine);
    }, [params.cuisine]);
    return (
        <div>
            <div className="CuisineTitle">
                You have chosen {params.cuisine} cuisine!
            </div>

            <li className="CategoryList PopularList">
                {
                    cuisine.map((recipe) => {
                        return (
                            <FoodItem recipe={recipe} key={recipe.id}/>
                        )
                    })
                }
            </li>
        </div>
    )
}

export default CuisineMain
