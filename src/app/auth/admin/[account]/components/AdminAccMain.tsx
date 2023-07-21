"use client"
// json-server -p 3001 --watch db.json
import React, {JSX, useEffect, useState} from 'react'
import {fetchAdminData} from "@/app/auth/admin/[account]/fetchAdminData";
import {addDishFormType, Client, Dish, nullClient, nullDish} from "@/app/classes";
import FoodItemInList from "@/app/auth/admin/[account]/components/FoodItemInList";
import {addDish} from "@/app/fetch";
import GeneralForm from "@/lib/form/components/GeneralForm";
import moment from "moment";

const AdminAccMain: ({name} : {name: string}) => JSX.Element = ({name}) => {
    const [client, setClient] = useState(nullClient)
    const [dish, setDish] = useState(nullDish)

    const [isOpenForm, setIsOpenForm] = useState(false)

    function findClient(clients: Client[]) {
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].name === name) {
                setClient(clients[i])
            }
        }
    }
    async function fetchHandler() {
        await fetchAdminData().then(clients => {
            findClient(clients)
        })
    }

    async function addDishHandler(dish: Dish) {
        await addDish(client, dish)
            .then(clients => {
                findClient(clients)
            })
    }

    const changeEventHandler = (text: string, field: string) => {
        setDish(prevState => ({
            ...prevState,
            [field]: text
        }))
    }

    const createDishHandler = () => {
        setDish(prevState => ({
            ...prevState,
            "id": moment().unix()
        }))

        addDishHandler(dish)

        setIsOpenForm(false)
    }

    const closeFormHandler = () => {
        setDish(nullDish)
        setIsOpenForm(false)
    }

    useEffect(() => {
        fetchHandler().then(r => r)
    }, [name])
    return (
        <>
            {
                isOpenForm ? (
                    <GeneralForm
                        type={addDishFormType}
                        setIsOpenForm={setIsOpenForm}
                        changeEventHandler={changeEventHandler}
                        createDishHandler={createDishHandler}
                        closeFormHandler={closeFormHandler}
                    />
                ) : null
            }
            <div className="AdmAccWrapper">
                {/*<button className="MyButton" onClick={fetchHandler}>Click Me!</button>*/}
                <button className="MyButton" onClick={() => setIsOpenForm(true)}>Add Dish</button>
                {
                    client.dishes.map(dish => (
                        <FoodItemInList dish={dish} key={dish.id}/>
                    ))
                }
            </div>
        </>
    )
}

export default AdminAccMain
