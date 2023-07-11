import React from 'react'
import '@/app/all/css/index.css'
import Italian from "@/app/all/components/cuisines/Italian";
import American from "@/app/all/components/cuisines/American";
import Japanese from "@/app/all/components/cuisines/Japanese";
import Georgian from "@/app/all/components/cuisines/Georgian";
import FilterOff from "@/app/all/components/cuisines/FilterOff";
import German from "@/app/all/components/cuisines/German";

function Category() {
    return (
        <li className="CategoryList">
            <FilterOff/>
            <Italian/>
            <American/>
            <Japanese/>
            <German/>
        </li>
    )
}

export default Category
