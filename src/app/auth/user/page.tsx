import React from "react";
import "@/app/auth/user/lib/css/index.css";
import "@/app/auth/user/lib/css/bootstrap.min.css";
import AuthMain from "@/app/auth/user/lib/components/AuthMain";

export const metadata = {
  title: "User Auth",
  description: "Page with user authentication",
};
function Page() {
  return (
    <>
      <AuthMain />
    </>
  );
}

export default Page;
