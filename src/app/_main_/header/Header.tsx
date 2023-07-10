import React from 'react'
import '@/app/globals.css'
import '@/app/_main_/css/position.css'
import Logo from "@/app/_main_/header/components/Logo";
import NavigationButtons from "@/app/_main_/header/components/NavigationButtons";

function Header() {
    const prevPage = 'home'
    const currentPage = 'home'

    return (
        <div className="GeneralFooterHeader PositionHeader">
            <Logo/>
            <NavigationButtons
                prevPage={prevPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Header
