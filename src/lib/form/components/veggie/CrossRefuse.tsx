"use client"
import React, {JSX} from 'react'
import styled from "styled-components";
import {SignWrapperColor} from "@/lib/form/components/veggie/VeggieChoose";

const CrossRefuse: ({active} : {active: boolean}) => JSX.Element = ({active}) => {
    return (
        <CrossRefuseWrapperColor $active={active}>
            <div className="CrossRefuse">X</div>
        </CrossRefuseWrapperColor>
    )
}

const CrossRefuseWrapperColor = styled('div')<SignWrapperColor>`
  div {
    color: ${props => props.$active ? 'red' : 'black'};
  }
`

export default CrossRefuse
