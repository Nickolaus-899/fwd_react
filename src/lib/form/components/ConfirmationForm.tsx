import React, {JSX} from 'react'
import {Dish} from "@/app/classes";

const ConfirmationForm: ({closeFormHandler, deleteDishHandler}
                             : {closeFormHandler: Function, deleteDishHandler: Function})
    => JSX.Element = ({closeFormHandler, deleteDishHandler}) => {
    return (
        <div>
            <div>Do you really want to delete this dish?</div>
            <div className="ButtonsWrapper">
                <button className="ExtraButton" onClick={() => {deleteDishHandler()}}>Delete</button>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default ConfirmationForm
