import React, {JSX} from 'react'

const LogOutForm: ({closeFormHandler, logOutHandler}
                             : {closeFormHandler: Function, logOutHandler: Function})
    => JSX.Element = ({closeFormHandler, logOutHandler}) => {
    return (
        <div>
            <div className="WhiteColorForInputText">Do you really want to log out?</div>
            <div className="ButtonsWrapper">
                <a href="/auth">
                    <button className="ExtraButton" onClick={() => {logOutHandler()}}>Log Out</button>
                </a>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default LogOutForm
