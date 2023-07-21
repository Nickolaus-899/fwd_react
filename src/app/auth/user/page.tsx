import React from 'react'
import '@/app/auth/user/lib/css/index.css'
import '@/app/auth/user/lib/css/bootstrap.min.css'
import AuthMain from "@/app/auth/user/lib/components/AuthMain";

function Page() {
    return (
        <>
            {/*<a href="/auth/user/Haha">*/}
            {/*    Link to Haha Account*/}
            {/*</a>*/}
            <AuthMain/>
        </>
    )
}

export default Page
