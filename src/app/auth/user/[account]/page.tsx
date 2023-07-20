import React from 'react'

function Page({params} : {params : {account: string}}) {
    return (
        <div>Account of a user {params.account}</div>
    )
}

export default Page
