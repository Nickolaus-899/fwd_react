"use client"
import React, {JSX, useEffect, useState} from 'react'
import CheckMark from "@/lib/form/components/veggie/CheckMark";
import CrossRefuse from "@/lib/form/components/veggie/CrossRefuse";
import styled from "styled-components";

const VeggieChoose: ({changeEventHandler} : {changeEventHandler: Function})
    => JSX.Element = ({changeEventHandler}) => {
    const [isPressed, setPressed] = useState(false)
    const [yes, setYes] = useState(false)
    const [no, setNo] = useState(false)

    useEffect(() => {
        changeEventHandler(yes, 'vegetarian')
    }, [yes])
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
