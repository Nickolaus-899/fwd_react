import React from 'react'
import DishMain from "@/app/dish/[id]/components/DishMain";
import './css/index.css'

function Page({params} : {params : {id: string}}) {
    return (
        <DishMain params={params}/>
    )
}

export default Page
