import React from "react";
import AdminAccHeader from "@/app/auth/admin/[account]/components/AdminAccHeader";
import "./css/index.css";
import AdminAccMain from "@/app/auth/admin/[account]/components/AdminAccMain";

function Page({ params }: { params: { account: string } }) {
  return (
    <div className="AdmAccWrapper">
      <AdminAccHeader name={params.account} />
      <AdminAccMain name={params.account} />
    </div>
  );
}

export default Page;
