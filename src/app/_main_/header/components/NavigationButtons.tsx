import React, {JSX} from 'react'
import '@/app/_main_/css/position.css'

import cart from "@/app/_main_/images/cart.svg"
import person from "@/app/_main_/images/person-check.svg"
import chevron from "@/app/_main_/images/chevron-left.svg"

import Image from "next/image";
import Link from "next/link";

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
            <div className="NavWrapper">
                <Link className="NavItem" href="/my">
                    <Image src={cart} alt="cart"/>
                </Link>

                <Link className="NavItem" href="/auth">
                    <Image src={person} alt="person"/>
                </Link>
            </div>

            {
                currentPage !== 'home' ? (
                    <div className="ChevronWrapper">
                        <Link className="ChevronItem" href={'/' + prevPage}>
                            <Image src={chevron} alt="chevron"/>
                        </Link>
                    </div>
                ) : null
            }
        </>
    )
}

export default NavigationButtons
