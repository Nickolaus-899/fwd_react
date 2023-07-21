import React, {JSX} from 'react'

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
                <button className="ExtraButton" onClick={() => {addToMenuHandler()}}>Add</button>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default AddToMenuForm
