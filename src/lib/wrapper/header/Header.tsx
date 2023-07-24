import React from "react";
import "@/app/globals.css";
import "@/lib/wrapper/css/position.css";
import "@/lib/wrapper/css/bootstrap.min.css";
import Logo from "@/lib/wrapper/header/components/Logo";
import NavigationButtons from "@/lib/wrapper/header/components/NavigationButtons";

function Header() {
  // const [currentPage, setCurrentPage] = useState('/')
  // const [prevPage, setPrevPage] = useState('/')
  return (
    <div className="GeneralFooterHeader PositionHeader">
      <Logo />
      <NavigationButtons />
    </div>
  );
}

export default Header;
