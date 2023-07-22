"use client"
import React, {JSX, useEffect, useState} from 'react'
import {fetchAdminData} from "@/app/auth/admin/[account]/fetchAdminData";
import {addDishFormType, Client, confirmationFormType, Dish, nullClient, nullDish, nullFunction} from "@/app/classes";
import FoodItemInList from "@/app/auth/admin/[account]/components/FoodItemInList";
import {addDish, deleteDish} from "@/app/fetch";
import GeneralForm from "@/lib/form/components/GeneralForm";
import moment from "moment";

const AdminAccMain: ({name} : {name: string}) => JSX.Element = ({name}) => {
    const [client, setClient] = useState(nullClient)
    const [dish, setDish] = useState(nullDish)

    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isConfirmForm, setConfirmForm] = useState(false)

    function findClient(clients: Client[]) {
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].token === name) {
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
        addDishHandler(dish)

        setIsOpenForm(false)
    }

    const closeFormHandler = () => {
        setDish(nullDish)
        setIsOpenForm(false)
    }

    const closeConfirmPage = () => {
        setConfirmForm(false)
    }

    const deleteDishHandler = () => {
        deleteDish(client, dish)

        setConfirmForm(false)
    }

    const openCreationDishPageHandler = () => {
        setDish((prevState) => ({
            ...prevState,
            cuisine: client.admin_info.cuisine,
            id: moment().unix()
        }))
        setIsOpenForm(true)
    }
    const openConfirmPageHandler = (selectedDish: Dish) => {
        setConfirmForm(true)
        setDish(selectedDish)
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
                        deleteDishHandler={nullFunction}
                        dish={dish}
                        addToMenuHandler={nullFunction}
                    />
                ) : null
            }
            {
                isConfirmForm ? (
                    <GeneralForm
                        type={confirmationFormType}
                        setIsOpenForm={setConfirmForm}
                        changeEventHandler={nullFunction}
                        createDishHandler={nullFunction}
                        closeFormHandler={closeConfirmPage}
                        deleteDishHandler={deleteDishHandler}
                        dish={nullDish}
                        addToMenuHandler={nullFunction}
                    />
                ) : null
            }
            <div className="AdmAccWrapper">
                {/*<button className="MyButton" onClick={fetchHandler}>Click Me!</button>*/}
                <button className="MyButton ButtonAddDishPosition" onClick={() => openCreationDishPageHandler()}>Add Dish</button>
                {
                    client.dishes.map(dish => (
                        <FoodItemInList
                            dish={dish}
                            openConfirmPageHandler={openConfirmPageHandler}
                            key={dish.id}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default AdminAccMain
