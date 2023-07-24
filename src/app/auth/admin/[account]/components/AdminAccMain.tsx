"use client";
import React, { JSX, useEffect, useState } from "react";
import { fetchAdminData } from "@/app/auth/admin/[account]/fetchAdminData";
import {
  addDishFormType,
  changePasswordFormType,
  Client,
  confirmationFormType,
  deleteAccountFormType,
  Dish,
  logOutConfirmFormType,
  nullClient,
  nullDish,
  nullFunction,
  timeForReloading,
  userInfoKey,
} from "@/app/classes";
import FoodItemInList from "@/app/auth/admin/[account]/components/FoodItemInList";
import { addDish, deleteDish, removeClient } from "@/app/fetch";
import GeneralForm from "@/lib/form/GeneralForm";
import moment from "moment";

const AdminAccMain: ({ name }: { name: string }) => JSX.Element = ({
  name,
}) => {
  const [client, setClient] = useState(nullClient);
  const [dish, setDish] = useState(nullDish);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isConfirmForm, setConfirmForm] = useState(false);
  const [isLogOutForm, setLogOutForm] = useState(false);
  const [isDeleteAccForm, setDeleteAccForm] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  function findClient(clients: Client[]) {
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].token === name) {
        setClient(clients[i]);
      }
    }
  }

  async function addDishHandler(dish: Dish) {
    await addDish(client, dish).then((clients) => {
      findClient(clients);
    });
  }

  const changeEventHandler = (text: string, field: string) => {
    setDish((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const createDishHandler = () => {
    addDishHandler(dish);

    setIsOpenForm(false);
  };

  const closeFormHandler = () => {
    setDish(nullDish);
    setIsOpenForm(false);
  };

  const closeConfirmPage = () => {
    setConfirmForm(false);
  };

  const deleteDishHandler = () => {
    deleteDish(client, dish);

    setConfirmForm(false);
    setTimeout(function () {
      location.reload();
    }, timeForReloading);
  };

  const openCreationDishPageHandler = () => {
    setDish((prevState) => ({
      ...prevState,
      cuisine: client.admin_info.cuisine,
      id: moment().unix(),
    }));
    setIsOpenForm(true);
  };
  const openConfirmPageHandler = (selectedDish: Dish) => {
    setConfirmForm(true);
    setDish(selectedDish);
  };

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
    localStorage.removeItem(userInfoKey);
  };

  const deleteAcc = () => {
    removeClient(client);
    logOut();
  };

  const closeChangeForm = () => {
    setIsChangePassword(false);
  };

  useEffect(() => {
    async function fetchHandler() {
      await fetchAdminData().then((clients) => {
        for (let i = 0; i < clients.length; i++) {
          if (clients[i].token === name) {
            setClient(clients[i]);
          }
        }
      });
    }
    fetchHandler().then((r) => r);
  }, [name]);
  return (
    <>
      {isOpenForm ? (
        <GeneralForm
          type={addDishFormType}
          setIsOpenForm={setIsOpenForm}
          changeEventHandler={changeEventHandler}
          createDishHandler={createDishHandler}
          closeFormHandler={closeFormHandler}
          deleteHandler={nullFunction}
          dish={dish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
      {isConfirmForm ? (
        <GeneralForm
          type={confirmationFormType}
          setIsOpenForm={setConfirmForm}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeConfirmPage}
          deleteHandler={deleteDishHandler}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
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
      <div className="AdmAccWrapper">
        {/*<button className="MyButton" onClick={fetchHandler}>Click Me!</button>*/}
        <button
          className="MyButton ButtonAddDishPosition"
          onClick={() => openCreationDishPageHandler()}
        >
          Add Dish
        </button>
        {client.dishes.map((dish) => (
          <FoodItemInList
            dish={dish}
            openConfirmPageHandler={openConfirmPageHandler}
            key={dish.id}
          />
        ))}

        <div className="ButtonDeleteWrapper">
          <button
            className="MyButton"
            onClick={() => setIsChangePassword(true)}
          >
            Change Password
          </button>
          <button className="MyButton" onClick={() => openLogOutFormHandler()}>
            Log Out
          </button>
          <button
            className="MyButton"
            onClick={() => openDeleteAccFormHandler()}
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminAccMain;
