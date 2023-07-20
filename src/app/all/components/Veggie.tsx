"use client"
import React, {useEffect, useState} from 'react'
import {API, emptyArrayShort, randomAPI} from "@/app/classes";
import Image from "next/image";
import FoodItem from "@/app/all/components/FoodItem";

function Veggie() {
    const [veggie, setVeggie] = useState(emptyArrayShort)

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await
                fetch(`${API}${randomAPI}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=8&tag=vegetarian`);
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    }
    return (
        <div>
            <div className="PopularTitle">Vegetarian sets</div>
            <li className="CategoryList PopularList">
                {
                    veggie.map((recipe) => {
                        return (
                            <FoodItem recipe={recipe} key={recipe.id}/>
                        )
                    })
                }
            </li>
        </div>
    )
}

export default Veggie
