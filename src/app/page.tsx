import React from "react";
import "@/lib/home/css/index.css";
import "@/lib/home/css/bootstrap.min.css";
import HomeMain from "@/lib/home/components/HomeMain";

export const metadata = {
  title: "InnoFood",
  description: "Home Page",
};

export default function Home() {
  return <HomeMain />;
}
