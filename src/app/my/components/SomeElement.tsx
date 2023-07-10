import React, {JSX} from 'react'
import styled from "styled-components";
import {CustomElement} from "@/app/my/custom/style";

const SomeElement: ({word} : {word: string}) => JSX.Element = ({ word }) => {
    return (
        <CustomElement>Hello {word}</CustomElement>
    )
}



export default SomeElement
