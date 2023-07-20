import React from 'react'
import "./lib/css/index.css"
import AdminAccHeader from "@/app/auth/admin/account/lib/components/AdminAccHeader";

function Page() {
    return (
        <div className="AdmAccWrapper">
            <AdminAccHeader name={"Admin"}/>
        </div>
    )
}

export default Page
