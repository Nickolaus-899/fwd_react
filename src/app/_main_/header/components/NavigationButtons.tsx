import React from 'react'
import {NavItem, NavWrapper} from "@/app/_main_/custom/position";

import cart from "@/app/_main_/images/cart.svg"
import person from "@/app/_main_/images/person-check.svg"

import Image from "next/image";

function NavigationButtons() {
    return (
        <NavWrapper>
            <NavItem href="/my">
                <Image src={cart} alt="cart"/>
            </NavItem>
            <NavItem href="/auth">
                <Image src={person} alt="person"/>
            </NavItem>
        </NavWrapper>
    )
}

export default NavigationButtons
