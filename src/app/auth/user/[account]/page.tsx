"use client";
import React, { useEffect, useState } from "react";
import {
  changePasswordFormType,
  deleteAccountFormType,
  logOutConfirmFormType,
  nullClient,
  nullDish,
  nullFunction,
  userInfoKey,
  UserTokenInfo,
} from "@/app/classes";
import { fetchData, removeClient } from "@/app/fetch";
import "@/app/auth/user/lib/css/index.css";
import icon from "@/app/auth/user/lib/images/account-avatar-man-svgrepo-com.svg";
import Image from "next/image";
import GeneralForm from "@/lib/form/GeneralForm";
function Page({ params }: { params: { account: string } }) {
  const [client, setClient] = useState(nullClient);
  const [userName, setUserName] = useState("");

  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isLogOutForm, setLogOutForm] = useState(false);
  const [isDeleteAccForm, setDeleteAccForm] = useState(false);

  const closeAccForm = () => {
    setDeleteAccForm(false);
  };

  const closeLogOutForm = () => {
    setLogOutForm(false);
  };

  const openLogOutFormHandler = () => {
    setLogOutForm(true);
  };

  const openDeleteAccFormHandler = () => {
    setDeleteAccForm(true);
  };

  const logOut = () => {
    localStorage.removeItem("userInfo");
  };

  const deleteAcc = () => {
    removeClient(client);
    logOut();
  };

  const closeChangeForm = () => {
    setIsChangePassword(false);
  };

  useEffect(() => {
    async function loadClient() {
      fetchData().then((clients) => {
        for (let i = 0; i < clients.length; i++) {
          if (clients[i].token === params.account) {
            setClient(clients[i]);
            break;
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

    loadClient();
  }, [params.account]);
  return (
    <div>
      {isLogOutForm ? (
        <GeneralForm
          type={logOutConfirmFormType}
          setIsOpenForm={setLogOutForm}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeLogOutForm}
          deleteHandler={logOut}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
      {isDeleteAccForm ? (
        <GeneralForm
          type={deleteAccountFormType}
          setIsOpenForm={setDeleteAccForm}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeAccForm}
          deleteHandler={deleteAcc}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
      {isChangePassword ? (
        <GeneralForm
          type={changePasswordFormType}
          setIsOpenForm={setIsChangePassword}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeChangeForm}
          deleteHandler={nullFunction}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}

      <div className="userAccName row">
        <Image src={icon} alt="userAccFoto" width={250} height={250}></Image>
        <h1>Name: {userName} </h1>
        {client.email !== "" ? (
          <h2>Email: {client.email}</h2>
        ) : (
          <h2>Email was not provided</h2>
        )}
      </div>

      <div className="AccountActionsButtonsWrapper">
        <button className="MyButton" onClick={() => setIsChangePassword(true)}>
          Change Password
        </button>
        <button className="MyButton" onClick={() => openLogOutFormHandler()}>
          Log Out
        </button>
        <button className="MyButton" onClick={() => openDeleteAccFormHandler()}>
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Page;
