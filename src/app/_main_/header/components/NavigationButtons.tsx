"use client"
import React, {JSX} from 'react'
import '@/app/_main_/css/position.css'
import '@/app/_main_/css/bootstrap.min.css'

import cart from "@/app/_main_/images/cart.svg"
import person from "@/app/_main_/images/person-check.svg"
import chevron from "@/app/_main_/images/chevron-left.svg"

import Image from "next/image";

import {BiHomeAlt2} from "react-icons/bi";
import {GrHome} from "react-icons/gr";
import {IoHomeOutline} from "react-icons/io5";
import {FcHome} from "react-icons/fc";

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
