import React, {JSX} from 'react'
import Image, {StaticImageData} from "next/image";
// import "./../css/index.css"

const FoodPicture: ({food} : {food:string|StaticImageData}) => JSX.Element = ({food}) => {

    return (
        <div className="FoodWrapper">
            <Image src={food} alt={"food"} className="FoodItem" width={500} height={500}/>
        </div>
    )
}

export default FoodPicture
