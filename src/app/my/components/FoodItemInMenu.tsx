import React, {JSX, useState} from 'react'
import Image from "next/image";
import {Client, confirmationFormType, Dish, nullDish, nullFunction, timeForReloading} from "@/app/classes";
import {deleteDish} from "@/app/fetch";
import GeneralForm from "@/lib/form/GeneralForm";

const FoodItemInMenu: ({dish, client} : {dish: Dish, client: Client }) => JSX.Element = ({dish, client}) => {

    const [isConfirmForm, setConfirmForm] = useState(false)
    const closeConfirmPage = () => {
        setConfirmForm(false)
    }
    async function deleteFoodItem() {
        deleteDish(client, dish)

        setTimeout(function(){
            location.reload();
        }, timeForReloading);
    }

    const openConfirmPageHandler = () => {
        setConfirmForm(true)
    }
    return (
        <>
            {
                isConfirmForm ? (
                    <GeneralForm
                        type={confirmationFormType}
                        setIsOpenForm={setConfirmForm}
                        changeEventHandler={nullFunction}
                        createDishHandler={nullFunction}
                        closeFormHandler={closeConfirmPage}
                        deleteHandler={deleteFoodItem}
                        dish={nullDish}
                        addToMenuHandler={nullFunction}
                    />
                ) : null
            }
            <div className="dish1 row">
                <div className="col-md-3">
                    <Image loader={() => dish.img} className='svg' width={140} height={82.5} src={dish.img} alt={"food"}/>
                </div>
                <div className="col-md-6">
                    <h2 className="dish_header">{dish.title}</h2>
                    <h3 className="calories"> Calorific value: {dish.calories} kk </h3>
                </div>
                <div className="price col-md-3">
                    <h2>{dish.price} rub </h2>
                </div>
                <button onClick={() => {openConfirmPageHandler()}}>Delete Item</button>
            </div>
        </>

    )
}

export default FoodItemInMenu
