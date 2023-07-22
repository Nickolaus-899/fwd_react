import React, {JSX} from 'react'
import {UserTokenInfo} from "@/app/classes";
import {fetchData} from "@/app/fetch";

const AuthWasCompletedForm: ({closeFormHandler}
                           : {closeFormHandler: Function})
    => JSX.Element = ({closeFormHandler}) => {
    let check = localStorage.getItem("userInfo")
    let link: string = '/auth'
    if (check) {
        let userToken: UserTokenInfo = JSON.parse(localStorage.getItem("userInfo") as string)
        link = `/auth/${userToken.admin ? "admin" : "user"}/${userToken.name}`
    } else {
        console.log("No info in local storage")
    }

    return (
        <div>
            <div className="WhiteColorForInputText">Success!</div>
            <div className="ButtonsWrapper">
                <a href={link}>
                    <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Go to account</button>
                </a>
                <a href="/">
                    <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Go to home page</button>
                </a>
            </div>
        </div>
    )
}

export default AuthWasCompletedForm
