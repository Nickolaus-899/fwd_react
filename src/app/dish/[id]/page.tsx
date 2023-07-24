import React from "react";
import DishMain from "@/app/dish/[id]/components/DishMain";
import "./css/index.css";
import "./css/bootstrap.min.css";

export const metadata = {
  title: "Dish",
  description: "Page with dish info",
};

function Page({ params }: { params: { id: string } }) {
  return <DishMain params={params} />;
}

export default Page;
