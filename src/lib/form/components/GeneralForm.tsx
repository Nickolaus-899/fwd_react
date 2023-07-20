import React, {JSX} from 'react'
import "./../css/index.css"
import {addDishFormType} from "@/app/classes";
import AddDishForm from "@/lib/form/components/AddDishForm";

const GeneralForm: ({
                        type,
                        setIsOpenForm,
                        changeEventHandler
} : {
    type: string,
    setIsOpenForm: Function,
    changeEventHandler: Function
}) => JSX.Element = ({
                                            type,
                                            setIsOpenForm,
                                            changeEventHandler
}) => {
    return (
        <div className="FormPositionWrapper" onClick={() => setIsOpenForm(false)}>
            <div className="FormWrapper" onClick={(e: { stopPropagation: () => void; }) => e.stopPropagation()}>
                {
                    type === addDishFormType ? (
                        <AddDishForm changeEventHandler={changeEventHandler}/>
                    ) : null
                }
            </div>
        </div>
    )
}

export default GeneralForm
