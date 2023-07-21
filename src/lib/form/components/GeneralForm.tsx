import React, {JSX} from 'react'
import "./../css/index.css"
import {addDishFormType, confirmationFormType} from "@/app/classes";
import AddDishForm from "@/lib/form/components/AddDishForm";
import ConfirmationForm from "@/lib/form/components/ConfirmationForm";

const GeneralForm: ({
                        type,
                        setIsOpenForm,
                        changeEventHandler,
                        createDishHandler,
                        closeFormHandler,
                        deleteDishHandler
} : {
    type: string,
    setIsOpenForm: Function,
    changeEventHandler: Function,
    createDishHandler: Function,
    closeFormHandler: Function,
    deleteDishHandler: Function
}) => JSX.Element = ({
                                            type,
                                            setIsOpenForm,
                                            changeEventHandler,
                                            createDishHandler,
                                            closeFormHandler,
                                            deleteDishHandler
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
