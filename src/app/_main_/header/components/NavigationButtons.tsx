import React, {JSX} from 'react'
import {ChevronItem, ChevronWrapper, ClickableLink, NavItem, NavWrapper} from "@/app/_main_/custom/position";

import cart from "@/app/_main_/images/cart.svg"
import person from "@/app/_main_/images/person-check.svg"
import chevron from "@/app/_main_/images/chevron-left.svg"

import Image from "next/image";

const NavigationButtons: ({
                              prevPage,
                              currentPage
} : {
    prevPage : string,
    currentPage: string
}) => JSX.Element = ({
                                                  prevPage,
                                                  currentPage
}) => {
    return (
        <>
            <NavWrapper>
                <NavItem href="/my">
                    <Image src={cart} alt="cart"/>
                    <ClickableLink>Click
                    </ClickableLink>
                </NavItem>

                <NavItem href="/auth">
                    <Image src={person} alt="person"/>
                </NavItem>
            </NavWrapper>

            {
                currentPage !== 'home' ? (
                    <ChevronWrapper>
                        <ChevronItem href={'/' + prevPage}>
                            <Image src={chevron} alt="chevron"/>
                        </ChevronItem>
                    </ChevronWrapper>
                ) : null
            }
        </>
    )
}

export default NavigationButtons
