import React from 'react'
import "./lib/css/index.css"

function Page() {
    return (
        <div className="AdminUserChoose">
            <div>
                <h1>Do you want to enter as admin or a user?</h1>
            </div>
            <div>
                <a href="/auth/user">
                    <button className="MyButton">User</button>
                </a>
            </div>
            <div>
                <a href="/auth/admin">
                    <button className="MyButton">Admin</button>
                </a>
            </div>
        </div>
    )
}

export default Page
