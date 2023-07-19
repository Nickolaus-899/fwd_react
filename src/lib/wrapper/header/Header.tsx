import React, {JSX} from 'react'
import '@/app/globals.css'
import '@/lib/wrapper/css/position.css'
import '@/lib/wrapper/css/bootstrap.min.css'
import Logo from "@/lib/wrapper/header/components/Logo";
import NavigationButtons from "@/lib/wrapper/header/components/NavigationButtons";

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
