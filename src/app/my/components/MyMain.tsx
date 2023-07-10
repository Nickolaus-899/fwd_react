import React from 'react'
import SomeElement from "@/app/my/components/SomeElement";

function MyMain() {
    const word: string = "world"
    return (
        <div>
            <SomeElement word={word}/>
        </div>
    )
}

export default MyMain
