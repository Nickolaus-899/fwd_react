"use client"
import React, {JSX, useEffect, useState} from 'react'
import CheckMark from "@/lib/form/components/veggie/CheckMark";
import CrossRefuse from "@/lib/form/components/veggie/CrossRefuse";
import {Dish} from "@/app/classes";

const VeggieChoose: ({dish} : {dish: Dish})
    => JSX.Element = ({dish}) => {
    const [isPressed, setPressed] = useState(false)
    const [yes, setYes] = useState(false)
    const [no, setNo] = useState(false)

    useEffect(() => {
        // changeEventHandler(yes, 'vegetarian')
        dish.vegetarian = yes
    }, [yes, dish])
    return (
        <div className="VeggieChooseWrapper">
            <a onClick={() => {
                setPressed(true)
                setYes(true)
                setNo(false)
            }}>
                <CheckMark active={isPressed && yes}/>
            </a>
            <a onClick={() => {
                setPressed(true)
                setNo(true)
                setYes(false)
            }}>
                <CrossRefuse active={isPressed && no}/>
            </a>
        </div>
    )
}

export interface SignWrapperColor {
    $active: boolean
}


export default VeggieChoose
