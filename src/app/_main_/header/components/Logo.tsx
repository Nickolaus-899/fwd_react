import React from 'react'
import {InnoLogo} from "@/app/_main_/custom/position";
import {Kaushan_Script} from '@next/font/google'

const kaushanScript = Kaushan_Script({
    subsets: ['latin'],
    weight: ['400']
})

function Logo() {
    return (
        <InnoLogo className={kaushanScript.className}>InnoFood</InnoLogo>
    )
}

export default Logo
