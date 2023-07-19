import React, {JSX} from 'react'
import '@/app/globals.css'
import '@/app/_main_/css/position.css'
import '@/app/_main_/css/bootstrap.min.css'
import Logo from "@/app/_main_/header/components/Logo";
import NavigationButtons from "@/app/_main_/header/components/NavigationButtons";

const Header: ({

} : {
}) => JSX.Element = ({

                                   }) => {

    // const [currentPage, setCurrentPage] = useState('/')
    // const [prevPage, setPrevPage] = useState('/')
    return (
        <div className="GeneralFooterHeader PositionHeader">
            <Logo/>
            <NavigationButtons/>
        </div>
    )
}

export default Header
