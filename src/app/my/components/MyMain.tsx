"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dish1 from "@/app/my/images/dish1.png";
import {
  authWasNotDoneFormType,
  Client,
  Dish,
  emptyDishesArray,
  nullClient,
  nullDish,
  nullFunction,
  userInfoKey,
  UserTokenInfo,
} from "@/app/classes";
import FoodItemInMenu from "@/app/my/components/FoodItemInMenu";
import GeneralForm from "@/lib/form/GeneralForm";
import { fetchData } from "@/app/fetch";
function MyMain() {
  const [isOpenAuthWasNotDoneForm, setOpenAuthWasNotDoneForm] = useState(false);

  const [client, setClient] = useState(nullClient);

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [myArray, setMyArray] = useState(emptyDishesArray);

  const closeAuthForm = () => {
    setOpenAuthWasNotDoneForm(false);
  };

  async function loadClient(token: string) {
    await fetchData().then((clients) => {
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].token === token) {
          setClient(clients[i]);
          break;
        }
      }
    });
  }

  // const dish: Dish = {
  //     id: 1,
  //     title: "dish1",
  //     price: 300,
  //     calories: 300,
  //     vegetarian: true,
  //     cuisine: "italian",
  //     img: "https://lafoy.ru/photo_l/blyuda-iz-ryby-recepty-foto-1383-0.jpg",
  //     link: "https://lafoy.ru/blyuda-iz-ryby-recepty-1383"
  // }

  // let myArray: Dish[] = []

  // for (let i = 0; i < 5; i++) {
  //     myArray = [...myArray, dish]
  // }

  useEffect(() => {
    async function loadData() {
      let check = localStorage.getItem(userInfoKey);
      if (check) {
        let token: UserTokenInfo = JSON.parse(
          localStorage.getItem(userInfoKey) as string
        );
        await loadClient(token.token);
      } else {
        setOpenAuthWasNotDoneForm(true);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    function loadDishes() {
      setMyArray(emptyDishesArray);
      setTotalPrice(0);
      setTotalCalories(0);

      for (let i = 0; i < client.dishes.length; i++) {
        setMyArray((prevState) => [...prevState, client.dishes[i]]);
        setTotalCalories(
          (prevState) =>
            prevState + parseInt(client.dishes[i].calories.toString())
        );
        setTotalPrice(
          (prevState) => prevState + parseInt(client.dishes[i].price.toString())
        );
      }
    }

    loadDishes();
  }, [client]);

  return (
    <>
      {isOpenAuthWasNotDoneForm ? (
        <GeneralForm
          type={authWasNotDoneFormType}
          setIsOpenForm={setOpenAuthWasNotDoneForm}
          changeEventHandler={nullFunction}
          createDishHandler={nullFunction}
          closeFormHandler={closeAuthForm}
          deleteHandler={nullFunction}
          dish={nullDish}
          addToMenuHandler={nullFunction}
        />
      ) : null}
      <div className="row">
        <div className="col-md-12">
          <div className="my_menu">
            <h1>My menu</h1>
            {myArray.map((dish) => (
              <FoodItemInMenu dish={dish} client={client} key={dish.id} />
            ))}

            <div className="total row">
              <div className="col-md-3">
                <h2>Total:</h2>
              </div>
              <div className="col-md-6">
                <h2 className="calories">{totalCalories} kk </h2>
              </div>
              <div className="price col-md-3">
                <h2> {totalPrice} rub </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyMain;
