"use client";
import React, { JSX, useEffect, useState } from "react";
import { nullClient, userInfoKey, UserTokenInfo } from "@/app/classes";
import { fetchAdminData } from "@/app/auth/admin/[account]/fetchAdminData";

const AdminAccHeader: ({ name }: { name: string }) => JSX.Element = ({
  name,
}) => {
  const [client, setClient] = useState(nullClient);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchHandler() {
      await fetchAdminData().then((clients) => {
        for (let i = 0; i < clients.length; i++) {
          if (clients[i].token === name) {
            setClient(clients[i]);
          }
        }
      });

      let check = localStorage.getItem(userInfoKey);
      if (check) {
        let token: UserTokenInfo = JSON.parse(
          localStorage.getItem(userInfoKey) as string
        );
        setUserName(token.name);
      } else {
        console.log("User is not authorized");
      }
    }
    fetchHandler();
  }, [name]);
  return (
    <div className="AdmAccWrapper">
      <h1>
        Hello, {userName}
        {client.admin_info.restaurant === "" ? "!" : null}
      </h1>
      `{/*<div>You can add, delete and update dishes</div>*/}
      {client.admin_info.restaurant !== "" ? (
        <h2 className="HeaderFrom">from {client.admin_info.restaurant}!</h2>
      ) : null}
      {client.admin_info.cuisine !== "" ? (
        <h2 className="HeaderCuisine">
          You have set {client.admin_info.cuisine} cuisine
        </h2>
      ) : null}
    </div>
  );
};

export default AdminAccHeader;
