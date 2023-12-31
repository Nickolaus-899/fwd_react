import React from "react";
import MyMain from "@/app/my/components/MyMain";
import "./css/index.css";
import "./css/bootstrap.min.css";

export const metadata = {
  title: "My Menu",
  description: "Page with selected dishes",
};

function Page() {
  return <MyMain />;
}

export default Page;
