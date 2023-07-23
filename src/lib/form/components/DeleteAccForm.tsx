import React, {JSX} from 'react'

const DeleteAccForm: ({closeFormHandler, deleteAccHandler}
                             : {closeFormHandler: Function, deleteAccHandler: Function})
    => JSX.Element = ({closeFormHandler, deleteAccHandler}) => {
    return (
        <div>
            <div className="WhiteColorForInputText">Do you really want to delete your account?</div>
            <div className="ButtonsWrapper">
                <a href="/auth">
                    <button className="ExtraButton" onClick={() => {deleteAccHandler()}}>Delete</button>
                </a>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteAccForm
