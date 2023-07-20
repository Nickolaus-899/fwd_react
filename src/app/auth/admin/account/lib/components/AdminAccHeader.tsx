import React, {JSX} from 'react'

const AdminAccHeader: ({name} : {name: string}) => JSX.Element = ({name}) => {
    return (
        <div className="AdmAccWrapper">
            <h1>Hello, {name}!</h1>
            <div>You can add, delete and update dishes</div>
        </div>
    )
}

export default AdminAccHeader
