"use client"
import React, {useEffect, useState} from 'react'
import {API, emptyVarComplex} from "@/app/constants";
import FoodPicture from "@/lib/home/components/FoodPicture";
import "@/lib/home/css/index.css"
import "@/lib/home/css/bootstrap.min.css"
import {LuVegan} from "react-icons/lu";
import MyButton from "@/lib/home/components/MyButton";

function DishMain({params} : {params : {id: string}}) {
    const [details, setDetails] = useState(emptyVarComplex);
    const fetchDetails = async () => {
        const data = await fetch(
            `${API}/${params.id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
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
                <FoodPicture food={details.image}/>
                <li className="DishCharsList">
                    <div className="SingleDetailWrapper">
                        <div className="ItemInDetail">
                            Calories: _calories_
                        </div>
                    </div>
                    <div className="SingleDetailWrapper">
                        <div className="ItemInDetail">Price:</div>
                        {
                            details.cheap ? (
                                <div>cheap!</div>
                            ) : (
                                <div>expensive</div>
                            )
                        }
                    </div>
                    <div className="SingleDetailWrapper">
                        <div className="ItemInDetail">Diets:</div>
                        <div>
                            {
                                details.diets.map((diet, i) => (
                                    i === details.diets.length - 1 ? (
                                        <div className="DietsList" key={details.id}>{diet}</div>
                                    ) : (
                                        <div key={details.id}>{diet},</div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className="SingleDetailWrapper">
                        Restaurant: _some_restaurant_
                    </div>
                    <div className="SingleDetailWrapper">
                        <a href="https://eda.yandex.ru/innopolis">
                            <MyButton/>
                        </a>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default DishMain
