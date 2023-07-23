import React from 'react'
import '@/app/all/css/index.css'
import '@/app/all/css/bootstrap.min.css'
import Italian from "@/app/all/components/cuisines/Italian";
import American from "@/app/all/components/cuisines/American";
import Japanese from "@/app/all/components/cuisines/Japanese";
import FilterOff from "@/app/all/components/cuisines/FilterOff";
import German from "@/app/all/components/cuisines/German";
import Russian from "@/app/all/components/cuisines/Russian";

function Category() {
    return (
        <li className="CategoryList">
            <FilterOff/>
            <Italian/>
            <American/>
            <Japanese/>
            <Russian/>
            <German/>
        </li>
    )
}

export default Category
