"use client"
import React, {useEffect, useState} from 'react'
import {nullClient, userInfoKey, UserTokenInfo} from "@/app/classes";
import {fetchData} from "@/app/fetch";

function Page({params} : {params : {account: string}}) {
    const [client, setClient] = useState(nullClient)
    const [userName, setUserName] = useState("")

    async function loadClient() {
        fetchData().then(clients => {
            for (let i = 0; i < clients.length; i++) {
                if (clients[i].token === params.account) {
                    setClient(clients[i])
                    break
                }
            }
        })

        let check = localStorage.getItem(userInfoKey)
        if (check) {
            let token: UserTokenInfo = JSON.parse(localStorage.getItem(userInfoKey) as string)
            setUserName(token.name)
        } else {
            console.log('User is not authorized')
        }
    }

    useEffect(() => {
        loadClient()
    }, [])
    return (
        <div>Account of a user {userName}</div>
    )
}

export default Page
