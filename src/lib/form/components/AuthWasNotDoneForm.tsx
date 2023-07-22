import React, {JSX} from 'react'

const AuthWasNotDone: ({closeFormHandler}
                           : {closeFormHandler: Function})
    => JSX.Element = ({closeFormHandler}) => {
    return (
        <div>
            <div className="WhiteColorForInputText">You are not logged in!</div>
            <div className="ButtonsWrapper">
                <a href="/auth">
                    <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Log In</button>
                </a>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Close</button>
            </div>
        </div>
    )
}

export default AuthWasNotDone
