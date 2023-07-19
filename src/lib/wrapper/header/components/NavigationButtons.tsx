"use client"
import React, {JSX} from 'react'
import '@/lib/wrapper/css/position.css'
import '@/lib/wrapper/css/bootstrap.min.css'

import cart from "@/lib/wrapper/images/cart.svg"
import person from "@/lib/wrapper/images/person-check.svg"

import Image from "next/image";

import {BiHomeAlt2} from "react-icons/bi";

const NavigationButtons: ({

} : {

}) => JSX.Element = ({

}) => {

    return (
        <>
            <div className="NavWrapper">
                <a className="NavItem" href="/my">
                    <Image src={cart} alt="cart"/>
                </a>

                <a className="NavItem" href="/auth">
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