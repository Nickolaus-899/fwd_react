import React from 'react'
import styled from "styled-components";
import '@/app/globals.css'
import {PositionHeader} from "@/app/_main_/custom/position";
import Logo from "@/app/_main_/header/components/Logo";

function Header() {
    return (
        <PositionHeader>
            <Logo/>
        </PositionHeader>
    )
}

export default Header
