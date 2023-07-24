import React from "react";
import Category from "@/app/all/components/Category";

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
