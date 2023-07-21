import React, {JSX} from 'react'
import "./../css/index.css"
import {addDishFormType, confirmationFormType, Dish} from "@/app/classes";
import AddDishForm from "@/lib/form/components/AddDishForm";
import ConfirmationForm from "@/lib/form/components/ConfirmationForm";

const GeneralForm: ({
                        type,
                        setIsOpenForm,
                        changeEventHandler,
                        createDishHandler,
                        closeFormHandler,
                        deleteDishHandler,
                        dish
} : {
    type: string,
    setIsOpenForm: Function,
    changeEventHandler: Function,
    createDishHandler: Function,
    closeFormHandler: Function,
    deleteDishHandler: Function,
    dish: Dish
}) => JSX.Element = ({
                                            type,
                                            setIsOpenForm,
                                            changeEventHandler,
                                            createDishHandler,
                                            closeFormHandler,
                                            deleteDishHandler,
                                            dish
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
            </div>
        </div>
    )
}

export default GeneralForm
