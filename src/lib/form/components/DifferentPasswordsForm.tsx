import React, {JSX} from 'react'

const DifferentPasswordsForm: ({closeFormHandler}
                           : {closeFormHandler: Function})
    => JSX.Element = ({closeFormHandler}) => {
    return (
        <div>
            <div className="WhiteColorForInputText">Passwords should be the same!</div>
            <div className="ButtonsWrapper">
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Close</button>
            </div>
        </div>
    )
}

export default DifferentPasswordsForm
