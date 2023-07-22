"use client"
import React, {useEffect, useState} from 'react'
import {nullClient, userInfoKey, UserTokenInfo} from "@/app/classes";
import {fetchData} from "@/app/fetch";
import '@/app/auth/user/lib/css/index.css'
import {email} from "@sideway/address";
import {token} from "stylis";
import icon from '@/app/auth/user/lib/images/account-avatar-man-svgrepo-com.svg';
import Image from "next/image";
function Page({params} : {params : {account: string}}) {
    const [client, setClient] = useState(nullClient)
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")


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
        <div>

            <div className="userAccName row">
                <Image src={icon} alt="userAccFoto" width={250} height={250}></Image>
                <h1>Name: {userName} </h1>
                <h2>Email: {client.email}</h2>
            </div>
        </div>
    )
}

export default Page
