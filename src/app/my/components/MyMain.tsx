import React from 'react'
import Image from "next/image";
import dish1 from '@/app/my/images/dish1.png'
function MyMain() {

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="my_menu">
                    <h1>My menu</h1>
                    <div className="dish1 row">

                        <div className="col-md-3">
                            <Image className='svg' width={140} height={82.5} src={dish1} alt={"food"}/>
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
                            <h2 className="calories"> 900 kk </h2>
                        </div>
                        <div className="price col-md-3">
                            <h2> 900 rub </h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyMain
