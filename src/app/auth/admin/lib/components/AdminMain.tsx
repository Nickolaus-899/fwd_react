import React from 'react'
import Image from "next/image";
import icon from '@/app/auth/user/lib/images/fork-and-knife.svg'
import '@/app/auth/user/lib/css/index.css'
function AdminMain() {
    return (
        <section className="bodyCenter">
            <div className="registrationFormCard">
                <div className="head">
                    <Image src={icon} className="logo" alt={"fork-and-knife"} width={35} height={35}/>
                    <h1>InnoFood</h1>
                </div>
                <form className="registrationForm" action="/signin" method="POST">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="example@fmail.com"/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="******"/>
                    </div>
                    <div className="submit-buttons">
                        <button className="login-screen-button" type="submit">Log in</button>
                        <a className="login-screen-left block-display" href="/auth/admin/registration">Create an account</a>
                        <a className="login-screen-right block-display" href="">Forgot password?</a>
                    </div>
                </form>
            </div>
        </section>

    )
}



        // <div className="LinksToAdmin">
        //     <a>Here is auth for admin</a>
        //     <a href="/auth/admin/Nickolaus">
        //         Link to Nickolaus Account
        //     </a>
        //     <a href="/auth/admin/Kseniia">
        //         Link to Kseniia Account
        //     </a>
        // </div>

export default AdminMain
