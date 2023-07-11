"use client"
import React, {useEffect, useState} from 'react'
import {AnswerRandom, API, emptyArrayRand, randomAPI} from "@/app/constants";
import Image from "next/image";

function Popular() {
    const [popular, setPopular] = useState(emptyArrayRand)

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

export default Popular
