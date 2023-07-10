import React from 'react'
import styled from "styled-components";
import '@/app/globals.css'
import {PositionHeader} from "@/app/_main_/custom/position";
import Logo from "@/app/_main_/header/components/Logo";
import NavigationButtons from "@/app/_main_/header/components/NavigationButtons";

function Header() {
    return (
        <PositionHeader>
            <Logo/>
            <NavigationButtons/>
        </PositionHeader>
    )
}

export default Header
