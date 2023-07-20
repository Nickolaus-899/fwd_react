import React, {JSX} from 'react'
import Image from "next/image";
import {AnswerShort} from "@/app/classes";

const FoodItem: ({recipe} : {recipe: AnswerShort}) => JSX.Element = ({recipe}) => {
    return (
        <a href={"/dish/" + recipe.id} className="DecorLink">
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
}

export default FoodItem
