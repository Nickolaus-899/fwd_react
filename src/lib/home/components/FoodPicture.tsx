import React, {JSX} from 'react'
import Image from "next/image";

const FoodPicture: ({food} : {food:string}) => JSX.Element = ({food}) => {

    return (
        <div className="FoodWrapper">
            <Image loader={() => food} src={food} alt={"food"} className="FoodItem"/>
        </div>
    )
}

export default FoodPicture
