"use client"
import React, {useState} from 'react'
import Image from "next/image";
import icon from '@/app/auth/user/lib/images/fork-and-knife.svg';
import '@/app/auth/user/lib/css/index.css'
import GeneralForm from "@/lib/form/GeneralForm";
import {
    authCompletedFormType,
    authFailedFormType,
    Client,
    differentPasswordsFormType,
    nullAdminInfo,
    nullDish,
    nullFunction, UserTokenInfo
} from "@/app/classes";
import {encodeName, decodeToken} from "@/app/enigma"
import {addClient, fetchData} from "@/app/fetch";
import moment from "moment";

function Page() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [email, setEmail] = useState("")

    const [isOpenAuthFailedForm, setOpenAuthFailedForm] = useState(false)
    const [isOpenPasswordForm, setOpenPasswordForm] = useState(false)
    const [isOpenAuthCompletedForm, setOpenAuthCompletedForm] = useState(false)
    async function signUpHandler() {
        if (password !== checkPassword) {
            openPasswordFormHandler()
            return
        }
        if (name === "" || password === "") {
            openAuthFormHandler()
            return
        }
        let token = encodeName(name, password)
        let applyReturn: boolean = false
        await fetchData().then(clients => {
            for (let i = 0; i < clients.length; i++) {
                if (clients[i].token === token) {
                    applyReturn = true
                    openAuthFormHandler()
                    return
                }
            }
        })

        if (applyReturn) {
            return
        }
        const client: Client = {
            token: token,
            admin: false,
            admin_info: nullAdminInfo,
            dishes: [],
            email: email,
            id: moment().unix()
        }

        addClient(client)

        const userInfo: UserTokenInfo = {
            token: token,
            name: name,
            admin: false
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        openCompletedHandler()
    }

    const closeAuthFormHandler = () => {
        setOpenAuthFailedForm(false)
        setName("")
    }

    const openAuthFormHandler = () => {
        setOpenAuthFailedForm(true)
    }

    const closePasswordFormHandler = () => {
        setOpenPasswordForm(false)
        setCheckPassword("")
    }

    const openPasswordFormHandler = () => {
        setOpenPasswordForm(true)
    }

    const closeCompletedHandler = () => {
        setOpenAuthCompletedForm(false)
    }

    const openCompletedHandler = () => {
        setOpenAuthCompletedForm(true)
    }


    return (
        <>
            {
                isOpenAuthFailedForm ? (
                    <GeneralForm
                        type={authFailedFormType}
                        setIsOpenForm={setOpenAuthFailedForm}
                        changeEventHandler={nullFunction}
                        createDishHandler={nullFunction}
                        closeFormHandler={closeAuthFormHandler}
                        deleteHandler={nullFunction}
                        dish={nullDish}
                        addToMenuHandler={nullFunction}
                    />
                ) : null
            }
            {
                isOpenPasswordForm ? (
                    <GeneralForm
                        type={differentPasswordsFormType}
                        setIsOpenForm={setOpenPasswordForm}
                        changeEventHandler={nullFunction}
                        createDishHandler={nullFunction}
                        closeFormHandler={closePasswordFormHandler}
                        deleteHandler={nullFunction}
                        dish={nullDish}
                        addToMenuHandler={nullFunction}
                    />
                ) : null
            }
            {
                isOpenAuthCompletedForm ? (
                    <GeneralForm
                        type={authCompletedFormType}
                        setIsOpenForm={setOpenAuthCompletedForm}
                        changeEventHandler={nullFunction}
                        createDishHandler={nullFunction}
                        closeFormHandler={closeCompletedHandler}
                        deleteHandler={nullFunction}
                        dish={nullDish}
                        addToMenuHandler={nullFunction}
                    />
                ) : null
            }
            {/*<button*/}
            {/*    className="login-screen-button"*/}
            {/*    type="submit"*/}
            {/*    onClick={() => signUpHandler()}*/}
            {/*>*/}
            {/*    Sign Up*/}
            {/*</button>*/}
            <section className="bodyCenter">
                <div className="registrationFormCard">
                    <div className={"head"}>
                        <Image src={icon} className="logo" alt={"fork-and-knife"} width={35} height={35}/>
                        <h1>Innofood</h1>
                    </div>
                    <form className="registrationForm">
                        <div className="input">
                            <label htmlFor="name">Nickname</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Your nickname"
                                minLength={2}
                                maxLength={26}
                                onChange={(e: { target: { value: string; }; }) => setName(e.target.value)}
                            />
                        </div>

                        {/*<div className="input">*/}
                        {/*    <label htmlFor="input">Surname</label>*/}
                        {/*    <input type="text" id="surname" name="surname" placeholder=""/>*/}
                        {/*</div>*/}


                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@abc.xyz"
                                onChange={(e: { target: { value: string; }; }) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your password"
                                minLength={6}
                                maxLength={30}
                                onChange={(e: { target: { value: string; }; }) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="cpassword">Repeat Password</label>
                            <input
                                value={checkPassword}
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                placeholder="Repeat password"
                                onChange={(e: { target: { value: string; }; }) => setCheckPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="submit-buttons">
                        <button
                            className="login-screen-button"
                            type="submit"
                            onClick={() => signUpHandler()}
                        >
                            Sign Up
                        </button>
                    </div>
                    <a className="login-screen-left block-display" href="/auth/user">Already have an account</a>
                </div>
            </section>
        </>
    )
}

export default Page
