import React from 'react'

function CuisineMain({params} : {params : {cuisine: string}}) {
    return (
        <div>Cuisine: {params.cuisine}</div>
    )
}

export default CuisineMain
