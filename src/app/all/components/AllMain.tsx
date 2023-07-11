import React from 'react'
import Popular from "@/app/all/components/Popular";
import Veggie from "@/app/all/components/Veggie";

function AllMain() {
    return (
        <div>
            <div className="CuisineTitle">
                You have selected all dishes!
            </div>
            <Popular/>
            <Veggie/>
        </div>
    )
}

export default AllMain
