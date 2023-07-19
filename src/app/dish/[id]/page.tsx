import React from 'react'
import DishMain from "@/app/dish/[id]/components/DishMain";
import './css/index.css'
import './css/bootstrap.min.css'

function Page({params} : {params : {id: string}}) {
    return (
        <DishMain params={params}/>
    )
}

export default Page
