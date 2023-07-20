"use client"
import React, {useEffect, useState} from 'react'
import {API, emptyArrayShort, randomAPI} from "@/app/classes";
import Image from "next/image";
import FoodItem from "@/app/all/components/FoodItem";

function Popular() {
    const [popular, setPopular] = useState(emptyArrayShort)

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await
                fetch(`${API}${randomAPI}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=4`);
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    }

    return (
        <div>
            <div className="PopularTitle">Some sets</div>
            <li className="CategoryList PopularList">
            {
                popular.map((recipe) => {
                    return (
                        <FoodItem recipe={recipe} key={recipe.id}/>
                    )
                })
            }
            </li>
        </div>
    )
}

export default Popular
