import React, {JSX} from 'react'
import "./css/index.css"
import {
    addDishFormType,
    addToMenuFormType, authCompletedFormType,
    authFailedFormType,
    authWasNotDoneFormType, changePasswordFormType,
    confirmationFormType, deleteAccountFormType, differentPasswordsFormType,
    Dish, logOutConfirmFormType
} from "@/app/classes";
import AddDishForm from "@/lib/form/components/AddDishForm";
import ConfirmationForm from "@/lib/form/components/ConfirmationForm";
import AddToMenuForm from "@/lib/form/components/AddToMenuForm";
import AuthFailedForm from "@/lib/form/components/AuthFailedForm";
import AuthWasNotDone from "@/lib/form/components/AuthWasNotDoneForm";
import DifferentPasswordsForm from "@/lib/form/components/DifferentPasswordsForm";
import AuthWasCompletedForm from "@/lib/form/components/AuthWasCompletedForm";
import LogOutForm from "@/lib/form/components/LogOutForm";
import DeleteAccForm from "@/lib/form/components/DeleteAccForm";
import ChangePasswordForm from "@/lib/form/components/ChangePasswordForm";

const GeneralForm: ({
                        type,
                        setIsOpenForm,
                        changeEventHandler,
                        createDishHandler,
                        closeFormHandler,
                        deleteHandler,
                        dish,
                        addToMenuHandler
} : {
    type: string,
    setIsOpenForm: Function,
    changeEventHandler: Function,
    createDishHandler: Function,
    closeFormHandler: Function,
    deleteHandler: Function,
    dish: Dish,
    addToMenuHandler: Function
}) => JSX.Element = ({
                                            type,
                                            setIsOpenForm,
                                            changeEventHandler,
                                            createDishHandler,
                                            closeFormHandler,
                                            deleteHandler,
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
                            deleteDishHandler={deleteHandler}
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
                {
                    type === authFailedFormType ? (
                        <AuthFailedForm closeFormHandler={closeFormHandler}/>
                    ) : null
                }
                {
                    type === authWasNotDoneFormType ? (
                        <AuthWasNotDone closeFormHandler={closeFormHandler}/>
                    ) : null
                }
                {
                    type === differentPasswordsFormType ? (
                        <DifferentPasswordsForm closeFormHandler={closeFormHandler}/>
                    ) : null
                }
                {
                    type === authCompletedFormType ? (
                        <AuthWasCompletedForm closeFormHandler={closeFormHandler}/>
                    ) : null
                }
                {
                    type === logOutConfirmFormType ? (
                        <LogOutForm closeFormHandler={closeFormHandler} logOutHandler={deleteHandler}/>
                    ) : null
                }
                {
                    type === deleteAccountFormType ? (
                        <DeleteAccForm closeFormHandler={closeFormHandler} deleteAccHandler={deleteHandler}/>
                    ) : null
                }
                {
                    type === changePasswordFormType ? (
                        <ChangePasswordForm closeFormHandler={closeFormHandler}/>
                    ) : null
                }
            </div>
        </div>
    )
}

export default GeneralForm
