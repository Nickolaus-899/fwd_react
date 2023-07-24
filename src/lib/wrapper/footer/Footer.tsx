import React from "react";
import "@/app/globals.css";
import "@/app/bootstrap.min.css";

import "@/lib/wrapper/css/position.css";
import SomeText from "@/lib/wrapper/footer/components/SomeText";
import AboutUsLink from "@/lib/wrapper/footer/components/AboutUsLink";

function Footer() {
  return (
    <div className="GeneralFooterHeader PositionFooter">
      <SomeText />
      <AboutUsLink />
    </div>
  );
}

export default Footer;
