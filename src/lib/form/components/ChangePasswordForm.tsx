"use client"
import React, {JSX, useState} from 'react'
import {MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, timeForReloading, userInfoKey, UserTokenInfo} from "@/app/classes";
import {decodeToken, encodeName} from "@/app/enigma";
import {changePassword} from "@/app/fetch";

const ChangePasswordForm:({closeFormHandler} : {closeFormHandler: Function}) => JSX.Element = ({closeFormHandler}) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [oldPasswordPH, setOldPasswordPH] = useState("")
    const [newPasswordPH, setNewPasswordPH] = useState("")

    async function changeHandler() {
        const user: UserTokenInfo = JSON.parse(localStorage.getItem(userInfoKey) as string)

        setNewPasswordPH("")
        setOldPasswordPH("")

        let first = false
        let second = false

        if (decodeToken(user.token, oldPassword) !== user.name) {
            setOldPasswordPH("incorrect!")
            setOldPassword("")
            first = true
        }

        if (newPassword.length < MIN_PASSWORD_LENGTH) {
            setNewPasswordPH("too short!")
            setNewPassword("")
            second = true
        }

        if (newPassword.length > MAX_PASSWORD_LENGTH) {
            setNewPasswordPH("too long!")
            setNewPassword("")
            second = true
        }

        if (first || second) {
            return
        }

        await changePassword(newPassword)

        setTimeout(function(){
            const newToken: string = encodeName(user.name, newPassword)
            window.location.href = `/auth/${user.admin ? 'admin' : 'user'}/${newToken}`
        }, timeForReloading);

        closeFormHandler()

    }
    return (
        <div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Old Password:</div>
                <input
                    type="password"
                    onChange={(e: { target: { value: string; }; }) => setOldPassword(e.target.value)}
                    placeholder={oldPasswordPH}
                    value={oldPassword}
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">New Password:</div>
                <input
                    type="password"
                    onChange={(e: { target: { value: string; }; }) => setNewPassword(e.target.value)}
                    placeholder={newPasswordPH}
                    value={newPassword}
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="ButtonsWrapper">
                <button className="ExtraButton" onClick={() => {
                    changeHandler().then()
                }}>Change</button>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default ChangePasswordForm
