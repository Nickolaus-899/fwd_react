"use client"
import React, {useState} from 'react'

function Page() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div>
            <div>
                Nickname
                <input onChange={(e: { target: { value: string; }; }) => setName(e.target.value)}/>
            </div>
            <div>
                Email
                <input onChange={(e: { target: { value: string; }; }) => setEmail(e.target.value)}/>
            </div>
            <div>
                Password
                <input onChange={(e: { target: { value: string; }; }) => setPassword(e.target.value)}/>
            </div>
            <button onClick={() => {
                console.log(`Creating account for ${name}...`)
            }}>Create</button>
        </div>
    )
}

export default Page
