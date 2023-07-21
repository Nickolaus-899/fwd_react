import React, {JSX} from 'react'

const FoodPicture: ({food} : {food:string}) => JSX.Element = ({food}) => {

    return (
        <div className="FoodWrapper">
            <img src={food} alt={"food"} className="FoodItem"/>
        </div>
    )
}

export default FoodPicture
