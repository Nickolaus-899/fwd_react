import React from 'react'

function DishMain({params} : {params : {id: string}}) {
    return (
        <div>ID: {params.id}</div>
    )
}

export default DishMain
