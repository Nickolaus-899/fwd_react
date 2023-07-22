import React, {JSX} from 'react'

const AuthFailedForm: ({closeFormHandler}
                             : {closeFormHandler: Function})
    => JSX.Element = ({closeFormHandler}) => {
    return (
        <div>
            <div className="WhiteColorForInputText">Nickname is occupied! Please, try another one</div>
            <div className="ButtonsWrapper">
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Close</button>
            </div>
        </div>
    )
}

export default AuthFailedForm
