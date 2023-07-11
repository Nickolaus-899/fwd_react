import React from 'react'

function CuisineMain({params} : {params : {cuisine: string}}) {
    return (
        <div>
            <div className="CuisineTitle">
                You have chosen {params.cuisine} cuisine!
            </div>
        </div>
    )
}

export default CuisineMain
