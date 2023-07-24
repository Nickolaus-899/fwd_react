import React from 'react'
import '@/lib/wrapper/css/position.css'
import {Dancing_Script} from "@next/font/google"


const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400']
})
function SomeText() {
    const footerText: string = "FooterText"
    const someText: string = "SomeText"

    return (
        <>
            <div className={`${footerText} ${someText} ${dancingScript.className}`}>
                <div>InnoFood</div>
                <text className="Secret1">N</text>
                <text className="Secret2">&</text>
                <text className="Secret3">K</text>
            </div>
        </>

    )
}

export default SomeText
