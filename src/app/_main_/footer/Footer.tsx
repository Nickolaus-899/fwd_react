import React from 'react'
import styled from "styled-components";
import '@/app/globals.css'
import '@/app/bootstrap.min.css'

import '@/app/_main_/css/position.css'
import SomeText from "@/app/_main_/footer/components/SomeText";
import AboutUsLink from "@/app/_main_/footer/components/AboutUsLink";

function Footer() {
    return (
        <div className="GeneralFooterHeader PositionFooter">
            <SomeText/>
            <AboutUsLink/>
        </div>
    )
}

export default Footer
