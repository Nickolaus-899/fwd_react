import React from 'react'
import Image from "next/image";
import dish1 from '@/app/my/images/dish1.png'
import {Dish} from "@/app/classes";
function MyMain() {
    const dish: Dish = {
        id: 1,
        title: "dish1",
        price: 300,
        calories: 300,
        vegetarian: true,
        cuisine: "italian",
        img: "dish1",
        link: "@/app/classes"
    }
    let myArray: Array<Dish> = []

    for (let i = 0; i < 1; i++) {
        myArray = [...myArray, dish]
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="my_menu">
                    <h1>My menu</h1>
                    {/*{*/}
                    {/*    myArray.map((item) => (*/}
                    {/*        <Dish src={dish.link} calories={dish.calories} />*/}
                    {/*    ))*/}
                    {/*}*/}
                    <div className="dish1 row">
                        <div className="col-md-3">
                            <Image className='svg' width={140} height={82.5} src={myArray.} alt={"food"}/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="dish_header"> Dish1 </h2>
                            <h3 className="calories"> Calorific value: 300 kk </h3>
                        </div>
                        <div className="price col-md-3">
                            <h2> 300 rub </h2>
                        </div>
                    </div>
                    <div className="dish1 row">
                        <div className="col-md-3">
                            <Image className='svg' width={140} height={82.5} src={dish1} alt={"food"}/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="dish_header"> Dish2 </h2>
                            <h3 className="calories"> Calorific value: 300 kk </h3>
                        </div>
                        <div className="price col-md-3">
                            <h2> 300 rub </h2>
                        </div>
                    </div>
                    <div className="dish1 row">
                        <div className="col-md-3">
                            <Image className='svg' width={140} height={82.5} src={dish1} alt={"food"}/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="dish_header"> Dish3 </h2>
                            <h3 className="calories"> Calorific value: 300 kk </h3>
                        </div>
                        <div className="price col-md-3">
                            <h2> 300 rub </h2>
                        </div>
                    </div>
                    <div className="dish1 row">

                        <div className="col-md-3">
                            <Image className='svg' width={140} height={82.5} src={dish1} alt={"food"}/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="dish_header"> Dish4 </h2>
                            <h3 className="calories"> Calorific value: 300 kk </h3>
                        </div>
                        <div className="price col-md-3">
                            <h2> 300 rub </h2>
                        </div>

                    </div>
                    <div className="total row">

                        <div className="col-md-3">
                            <h2>Total:</h2>
                        </div>
                        <div className="col-md-6">
                            <h2 className="calories"> 1200 kk </h2>
                        </div>
                        <div className="price col-md-3">
                            <h2> 1200 rub </h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyMain
