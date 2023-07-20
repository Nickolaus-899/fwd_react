import React, {JSX} from 'react'

const AddDishForm: ({
                        changeEventHandler
} : {
    changeEventHandler: Function
}) => JSX.Element = ({
                                            changeEventHandler
}) => {
    return (
        <div>
            <div className="InputCustom">
                <div>Food name:</div>
                <input
                onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'title')}
                placeholder="Name"
            />
            </div>
        </div>
    )
}

export default AddDishForm
