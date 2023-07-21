import React, {JSX} from 'react'
import VeggieChoose from "@/lib/form/components/veggie/VeggieChoose";

const AddDishForm: ({
                        changeEventHandler,
                        createDishHandler,
                        closeFormHandler
} : {
    changeEventHandler: Function,
    createDishHandler: Function,
    closeFormHandler: Function
}) => JSX.Element = ({
                                            changeEventHandler,
                                            createDishHandler,
                                            closeFormHandler
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
            <div className="InputCustom">
                <div>Price:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'price')}
                    placeholder="Price"
                />
            </div>
            <div className="InputCustom">
                <div>Calories:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'calories')}
                    placeholder="Calories"
                />
            </div>
            <div className="InputCustom">
                <div>Is it vegetarian?</div>
                <VeggieChoose changeEventHandler={changeEventHandler}/>
            </div>
            <div className="InputCustom">
                <div>Link to image:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'img')}
                    placeholder="URL"
                />
            </div>
            <div className="ButtonsWrapper">
                <button className="ExtraButton" onClick={() => {createDishHandler()}}>Add</button>
                <button className="ExtraButton" onClick={() => {closeFormHandler()}}>Cancel</button>
            </div>
        </div>
    )
}

export default AddDishForm
