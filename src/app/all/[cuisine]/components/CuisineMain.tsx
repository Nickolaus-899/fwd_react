"use client"
import React, {useEffect, useState} from 'react'
import {API, complexAPI, emptyArrayComplex, emptyArrayShort} from "@/app/constants";
import Image from "next/image";
import FoodItem from "@/app/all/components/FoodItem";

function CuisineMain({params} : {params : {cuisine: string}}) {
    const [cuisine, setCuisine] = useState(emptyArrayShort);

    const getCuisine = async (name: string) => {
        const data = await fetch(
            `${API}${complexAPI}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=${name}&number=8`
        );
        const recipes = await data.json();

        setCuisine(recipes.results);
    };


    useEffect(() => {
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
