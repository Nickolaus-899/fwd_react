"use client"
import React, {useState} from 'react'
import Image from "next/image";
import icon from '@/app/auth/user/lib/images/fork-and-knife.svg';

function Page() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <section className="bodyCenter">
            <div className="registrationFormCard">
                <Image src={icon} className="logo" alt={"fork-and-knife"} width={35} height={35}/>

                <form className="registrationForm" action="/signup" method="POST">
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="John" minLength={2} maxLength={26}/>
                    </div>

                    <div className="input">
                        <label htmlFor="input">Surname</label>
                        <input type="text" id="surname" name="surname" placeholder="Doe"/>
                    </div>


                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="example@abc.xyz"/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your password"
                               minLength={6}
                               maxLength={30} value=""/>
                    </div>

                    <div className="input">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" value=""
                               placeholder="Repeat password"/>
                    </div>
                    <div className="submit-buttons">
                        <button className="login-screen-button" type="submit">Sign Up</button>
                        <a className="login-screen-left block-display" href=".">Already have an account? Log-in</a>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Page
