"use client"
import React, {useEffect, useState} from 'react'
import {API, emptyArrayRand, randomAPI} from "@/app/constants";
import Image from "next/image";

function Veggie() {
    const [veggie, setVeggie] = useState(emptyArrayRand)

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await
                fetch(`${API}${randomAPI}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=4&tag=vegetarian`);
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
                            <a href={"/dish/" + recipe.id} key={recipe.id}>
                                <div className="PopularItem">
                                    <Image
                                        className="PopularItemImg"
                                        src={recipe.image}
                                        alt={recipe.title}
                                        width={200}
                                        height={200}
                                    />
                                    <p className="FoodText">{recipe.title}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </li>
        </div>
    )
}

export default Veggie
