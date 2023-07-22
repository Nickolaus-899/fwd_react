import React from 'react'
import Image from "next/image";
import dish1 from '@/app/my/images/dish1.png'
import {Dish} from "@/app/classes";
import FoodItemInMenu from "@/app/my/components/FoodItemInMenu";
function MyMain() {
    const dish: Dish = {
        id: 1,
        title: "dish1",
        price: 300,
        calories: 300,
        vegetarian: true,
        cuisine: "italian",
        img: "https://lafoy.ru/photo_l/blyuda-iz-ryby-recepty-foto-1383-0.jpg",
        link: "https://lafoy.ru/blyuda-iz-ryby-recepty-1383"
    }
    let myArray: Dish[] = []

    for (let i = 0; i < 5; i++) {
        myArray = [...myArray, dish]
    }

    let totalCalories: number = 0
    let totalPrice: number = 0

    myArray.map((dish) => {
        totalCalories = totalCalories + dish.calories
        totalPrice = totalPrice + dish.price
    })
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="my_menu">
                    <h1>My menu</h1>
                    {
                        myArray.map((dish) => (
                            <FoodItemInMenu dish={dish} key={dish.id}/>
                        ))
                    }


                    <div className="total row">

                        <div className="col-md-3">
                            <h2>Total:</h2>
                        </div>
                        <div className="col-md-6">
                            <h2 className="calories">{totalCalories} kk </h2>
                        </div>
                        <div className="price col-md-3">
                            <h2> {totalPrice} rub </h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyMain
