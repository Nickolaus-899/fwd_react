import React, {JSX} from 'react'
import "./../css/index.css"
import {addDishFormType, addToMenuFormType, confirmationFormType, Dish} from "@/app/classes";
import AddDishForm from "@/lib/form/components/AddDishForm";
import ConfirmationForm from "@/lib/form/components/ConfirmationForm";
import AddToMenuForm from "@/lib/form/components/AddToMenuForm";

const GeneralForm: ({
                        type,
                        setIsOpenForm,
                        changeEventHandler,
                        createDishHandler,
                        closeFormHandler,
                        deleteDishHandler,
                        dish,
                        addToMenuHandler
} : {
    type: string,
    setIsOpenForm: Function,
    changeEventHandler: Function,
    createDishHandler: Function,
    closeFormHandler: Function,
    deleteDishHandler: Function,
    dish: Dish,
    addToMenuHandler: Function
}) => JSX.Element = ({
                                            type,
                                            setIsOpenForm,
                                            changeEventHandler,
                                            createDishHandler,
                                            closeFormHandler,
                                            deleteDishHandler,
                                            dish,
                                            addToMenuHandler
}) => {
    return (
        <div className="FormPositionWrapper" onClick={() => setIsOpenForm(false)}>
            <div className="FormWrapper" onClick={(e: { stopPropagation: () => void; }) => e.stopPropagation()}>
                {
                    type === addDishFormType ? (
                        <AddDishForm
                            changeEventHandler={changeEventHandler}
                            createDishHandler={createDishHandler}
                            closeFormHandler={closeFormHandler}
                            dish={dish}
                        />
                    ) : null
                }
                {
                    type === confirmationFormType ? (
                        <ConfirmationForm
                            closeFormHandler={closeFormHandler}
                            deleteDishHandler={deleteDishHandler}
                        />
                    ) : null
                }
                {
                    type === addToMenuFormType ? (
                        <AddToMenuForm
                            addToMenuHandler={addToMenuHandler}
                            closeFormHandler={closeFormHandler}
                        />
                    ) : null
                }
            </div>
        </div>
    )
}

export default GeneralForm
