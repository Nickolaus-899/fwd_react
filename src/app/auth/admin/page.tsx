import React from "react";
import AdminMain from "@/app/auth/admin/lib/components/AdminMain";
import "./lib/css/index.css";

export const metadata = {
  title: "Admin Auth",
  description: "Page with admin authentication",
};
function Page() {
  return (
    <div>
      {/*<div>*/}
      {/*    <a href="/auth/admin/Nickolaus">Link to Nikolaus account</a>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*    <a href="/auth/admin/Kseniia">Link to Kseniia account</a>*/}
      {/*</div>*/}
      <AdminMain />
    </div>
  );
}

export default Page;
