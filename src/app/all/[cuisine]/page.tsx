import React from "react";

import "./css/index.css";
import "./css/bootstrap.min.css";
import CuisineMain from "@/app/all/[cuisine]/components/CuisineMain";

export const metadata = {
  title: "Cuisine",
  description: "Page with selected cuisine",
};
function Page({ params }: { params: { cuisine: string } }) {
  return <CuisineMain params={params} />;
}

export default Page;
