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
                <div className="WhiteColorForInputText">Food name:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'title')}
                    placeholder="Name"
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Price:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'price')}
                    placeholder="Price"
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Calories:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'calories')}
                    placeholder="Calories"
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Is it vegetarian?</div>
                <VeggieChoose changeEventHandler={changeEventHandler}/>
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Cuisine:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'cuisine')}
                    placeholder="Cuisine"
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Link to image:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'img')}
                    placeholder="URL"
                    className="WhiteColorForInputText"
                />
            </div>
            <div className="InputCustom">
                <div className="WhiteColorForInputText">Link to the dish:</div>
                <input
                    onChange={(e: { target: { value: string; }; }) => changeEventHandler(e.target.value, 'link')}
                    placeholder="URL"
                    className="WhiteColorForInputText"
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
