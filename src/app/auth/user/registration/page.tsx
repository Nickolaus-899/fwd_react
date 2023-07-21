"use client"
import React, {useState} from 'react'
import Image from "next/image";
import icon from '@/app/auth/user/lib/images/fork-and-knife.svg';
import '@/app/auth/user/lib/css/index.css'

function Page() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <section className="bodyCenter">
            <div className="registrationFormCard">
                <div className={"head"}>
                    <Image src={icon} className="logo" alt={"fork-and-knife"} width={35} height={35}/>
                    <h1>Innofood</h1>
                </div>
                <form className="registrationForm" action="/signup" method="POST">
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="" minLength={2} maxLength={26}/>
                    </div>

                    <div className="input">
                        <label htmlFor="input">Surname</label>
                        <input type="text" id="surname" name="surname" placeholder=""/>
                    </div>


                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="example@abc.xyz"/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your password"
                               minLength={6}
                               maxLength={30} />
                    </div>

                    <div className="input">
                        <label htmlFor="cpassword">Repeat Password</label>
                        <input type="password" id="cpassword" name="cpassword"
                               placeholder="Repeat password"/>
                    </div>
                    <div className="submit-buttons">
                        <button className="login-screen-button" type="submit">Sign Up</button>
                        <a className="login-screen-left block-display" href=".">Already have an account</a>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Page
