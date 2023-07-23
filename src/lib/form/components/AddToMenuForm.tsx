import React, {JSX} from 'react'
import {timeForReloading} from "@/app/classes";

const AddToMenuForm: ({
                          addToMenuHandler,
                          closeFormHandler
} : {
    addToMenuHandler:Function,
    closeFormHandler: Function
}) => JSX.Element = ({
                                              addToMenuHandler,
                                              closeFormHandler
}) => {
    return (
        <div>
            <div className="WhiteColorForInputText">Do you really want to add this dish to your menu?</div>
            <div className="ButtonsWrapper">
                <a>
                    <button className="ExtraButton" onClick={() => {addToMenuHandler()}}>Add</button>
                </a>

                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default AddToMenuForm
