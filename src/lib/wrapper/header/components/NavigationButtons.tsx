"use client";
import React, { JSX, useEffect, useState } from "react";
import "@/lib/wrapper/css/position.css";
import "@/lib/wrapper/css/bootstrap.min.css";

import cart from "@/lib/wrapper/images/cart.svg";
import person from "@/lib/wrapper/images/person-check.svg";

import Image from "next/image";

import { BiHomeAlt2 } from "react-icons/bi";
import { userInfoKey, UserTokenInfo } from "@/app/classes";

const NavigationButtons: ({}: {}) => JSX.Element = ({}) => {
  const [link, setLink] = useState("/auth");
  const [myMenu, setMyMenu] = useState("/auth");

  useEffect(() => {
    const check = localStorage.getItem(userInfoKey);
    if (check) {
      const userInfo: UserTokenInfo = JSON.parse(
        localStorage.getItem(userInfoKey) as string
      );
      setLink(`/auth/${userInfo.admin ? "admin" : "user"}/${userInfo.token}`);
      setMyMenu(`${userInfo.admin ? `/auth/admin/${userInfo.token}` : "/my"}`);
    } else {
      setLink("/auth");
      setMyMenu("/auth");
    }
  }, []);

  return (
    <>
      <div className="NavWrapper">
        <a className="NavItem" href={myMenu}>
          <Image src={cart} alt="cart" />
        </a>

        <a className="NavItem" href={link}>
          <Image src={person} alt="person" />
        </a>
      </div>
      <div className="ChevronWrapper">
        <a className="ChevronItem" href={"/"}>
          <BiHomeAlt2 size={25} />
        </a>
      </div>
    </>
  );
};

export default NavigationButtons;
