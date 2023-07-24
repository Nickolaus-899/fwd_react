import React from "react";
import AboutMain from "@/app/about/components/AboutMain";
import "./css/index.css";
import "./css/bootstrap.min.css";
import dynamic from "next/dynamic";

// const About = dynamic(
//     () => import('./components/AboutMain'),
//     { ssr: false }
// )
function Page() {
  return <AboutMain />;
}

export default Page;
