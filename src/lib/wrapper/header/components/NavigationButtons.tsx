"use client"
import React, {JSX, useEffect, useState} from 'react'
import '@/lib/wrapper/css/position.css'
import '@/lib/wrapper/css/bootstrap.min.css'

import cart from "@/lib/wrapper/images/cart.svg"
import person from "@/lib/wrapper/images/person-check.svg"

import Image from "next/image";

import {BiHomeAlt2} from "react-icons/bi";
import {UserTokenInfo} from "@/app/classes";

const NavigationButtons: ({

} : {

}) => JSX.Element = ({

}) => {
    const [link, setLink] = useState("/auth")

    useEffect(() => {
        const check = localStorage.getItem("userInfo")
        if (check) {
            const userInfo: UserTokenInfo = JSON.parse(localStorage.getItem("userInfo") as string)
            setLink(`/auth/${userInfo.admin ? "admin" : "user"}/${userInfo.token}`)
        } else {
            setLink("/auth")
        }
    }, [])

    return (
        <>
            <div className="NavWrapper">
                <a className="NavItem" href="/my">
                    <Image src={cart} alt="cart"/>
                </a>

                <a className="NavItem" href={link}>
                    <Image src={person} alt="person"/>
                </a>
            </div>
            <div className="ChevronWrapper">
                <a className="ChevronItem" href={'/'}>
                    <BiHomeAlt2 size={25}/>
                </a>
            </div>
        </>
    )
}

export default NavigationButtons
