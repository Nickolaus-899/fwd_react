import React from "react";
import Category from "@/app/all/components/Category";

export const metadata = {
  title: "All Dishes",
  description: "Page with all dishes",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Category />
      {children}
    </div>
  );
}
