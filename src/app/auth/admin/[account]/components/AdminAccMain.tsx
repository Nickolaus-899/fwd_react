"use client"
// json-server -p 3001 --watch db.json
import React, {JSX, useEffect, useState} from 'react'
import {fetchAdminData} from "@/app/auth/admin/[account]/fetchAdminData";
import {nullClient} from "@/app/classes";
import FoodItemInList from "@/app/auth/admin/[account]/components/FoodItemInList";

const AdminAccMain: ({name} : {name: string}) => JSX.Element = ({name}) => {
    const [client, setClient] = useState(nullClient)
    async function fetchHandler() {
        await fetchAdminData().then(clients => {
            // clients.forEach(client => {
            //     if (client.name == name) {
            //         setClient(client)
            //     }
            // })

            for (let i = 0; i < clients.length; i++) {
                if (clients[i].name === name) {
                    setClient(clients[i])
                }
            }
        })
    }
    useEffect(() => {
        fetchHandler().then(r => r)
    }, [name])
    return (
        <div className="AdmAccWrapper">
            {/*<button className="MyButton" onClick={fetchHandler}>Click Me!</button>*/}
            {
                client.dishes.map(dish => (
                    <FoodItemInList dish={dish} key={dish.id}/>
                ))
            }
        </div>
    )
}

export default AdminAccMain
