"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon from "@/app/auth/user/lib/images/fork-and-knife.svg";
import { encodeName } from "@/app/enigma";
import { addClient, fetchData } from "@/app/fetch";
import {
  authCompletedFormType,
  authFailedFormType,
  Client,
  differentPasswordsFormType,
  nullAdminInfo,
  nullDish,
  nullFunction,
  userInfoKey,
  UserTokenInfo,
} from "@/app/classes";
import moment from "moment/moment";
import GeneralForm from "@/lib/form/GeneralForm";
function AuthMain() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [isOpenAuthFailedForm, setOpenAuthFailedForm] = useState(false);
  const [isOpenAuthCompletedForm, setOpenAuthCompletedForm] = useState(false);
  async function logInHandler() {
    let token = encodeName(name, password);
    console.log(token);
    let applyReturn: boolean = false;
    await fetchData().then((clients) => {
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].token === token) {
          applyReturn = true;
          const userInfo: UserTokenInfo = {
            token: token,
            name: name,
            admin: false,
          };
          localStorage.setItem(userInfoKey, JSON.stringify(userInfo));
          openCompletedHandler();
          return;
        }
      }
    });

    if (applyReturn) {
      return;
    }

    openAuthFormHandler();
  }

  const closeAuthFormHandler = () => {
    setOpenAuthFailedForm(false);
    setName("");
  };

  const openAuthFormHandler = () => {
    setOpenAuthFailedForm(true);
  };

  const closeCompletedHandler = () => {
    setOpenAuthCompletedForm(false);
  };

  const openCompletedHandler = () => {
    setOpenAuthCompletedForm(true);
  };
  return (
    <>
      {isOpenAuthFailedForm ? (
        <GeneralForm
          type={authFailedFormType}
          setIsOpenForm={setOpenAuthFailedForm}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeAuthFormHandler}
          deleteHandler={nullFunction}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
      {isOpenAuthCompletedForm ? (
        <GeneralForm
          type={authCompletedFormType}
          setIsOpenForm={setOpenAuthCompletedForm}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeCompletedHandler}
          deleteHandler={nullFunction}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
      <section className="bodyCenter">
        <div className="registrationFormCard">
          <div className="head">
            <Image
              src={icon}
              className="logo"
              alt={"fork-and-knife"}
              width={35}
              height={35}
            />
            <h1>InnoFood</h1>
          </div>
          <form className="registrationForm">
            <div className="input">
              <label htmlFor="username">Nickname</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nickname"
                value={name}
                onChange={(e: { target: { value: string } }) =>
                  setName(e.target.value)
                }
              />
            </div>

            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                value={password}
                onChange={(e: { target: { value: string } }) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </form>
          <div className="submit-buttons">
            <button
              className="login-screen-button"
              type="submit"
              onClick={() => logInHandler()}
            >
              Log in
            </button>
            <a
              className="login-screen-left block-display"
              href="/auth/user/registration"
            >
              Create an account
            </a>
            <a className="login-screen-right block-display" href="">
              Forgot password?
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthMain;
