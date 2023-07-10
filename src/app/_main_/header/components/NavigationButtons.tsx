"use client"
import React, {JSX} from 'react'
import '@/app/_main_/css/position.css'

import cart from "@/app/_main_/images/cart.svg"
import person from "@/app/_main_/images/person-check.svg"
import chevron from "@/app/_main_/images/chevron-left.svg"

import Image from "next/image";

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
                    <Image src={chevron} alt="chevron"/>
                </a>
            </div>
        </>
    )
}

export default NavigationButtons
