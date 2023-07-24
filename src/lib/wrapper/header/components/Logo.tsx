import React from "react";
import "@/lib/wrapper/css/position.css";
import "@/lib/wrapper/css/bootstrap.min.css";
import { Kaushan_Script } from "@next/font/google";

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

function Logo() {
  return (
    <div className={kaushanScript.className}>
      <div className="InnoLogo">InnoFood</div>
    </div>
  );
}

export default Logo;
