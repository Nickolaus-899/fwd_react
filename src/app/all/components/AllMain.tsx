"use client";
import React, { useEffect, useState } from "react";
import Popular from "@/app/all/components/Popular";
import Veggie from "@/app/all/components/Veggie";
import { Client, Dish, emptyDishesArray } from "@/app/classes";
import { fetchData } from "@/app/fetch";

const NUMBER_OF_POPULAR: number = 100;
const NUMBER_OF_VEGGIE: number = 12;

function AllMain() {
  const [popular, setPopular] = useState(emptyDishesArray);
  const [veggie, setVeggie] = useState(emptyDishesArray);

  useEffect(() => {
    const getPopular = async () => {
      fetchData().then((res) => {
        let clients = res;

        let usedClientNumbers: number[] = [];
        let usedDishNumbers: number[][] = [];
        for (let i = 0; i < clients.length; i++) {
          usedDishNumbers = [...usedDishNumbers, []];
        }

        let counterPopular = 0;
        let counterVeggie = 0;

        for (let i = 0; i < clients.length; i++) {
          if (
            counterVeggie === NUMBER_OF_VEGGIE &&
            counterPopular === NUMBER_OF_POPULAR
          ) {
            break;
          }
          let clientNumber = getRandomInt(clients.length);

          let clientCondition = true;
          // console.log("client_init", clientNumber)
          while (clientCondition) {
            clientCondition = false;
            clientNumber = getRandomInt(clients.length);
            for (let j = 0; j < usedClientNumbers.length; j++) {
              if (usedClientNumbers[j] === clientNumber) {
                clientCondition = true;
                break;
              }
            }
          }
          usedClientNumbers = [...usedClientNumbers, clientNumber];
          // console.log("client", clientNumber)
          if (!clients[clientNumber].admin) {
            continue;
          }
          for (let j = 0; j < clients[clientNumber].dishes.length; j++) {
            let dishNumber = getRandomInt(clients[clientNumber].dishes.length);
            // console.log("dish_init", dishNumber)

            let dishCondition = true;
            while (dishCondition) {
              dishCondition = false;
              dishNumber = getRandomInt(clients[clientNumber].dishes.length);
              for (let k = 0; k < usedDishNumbers[clientNumber].length; k++) {
                if (usedDishNumbers[clientNumber][k] === dishNumber) {
                  dishCondition = true;
                }
              }
            }
            usedDishNumbers[clientNumber] = [
              ...usedDishNumbers[clientNumber],
              dishNumber,
            ];

            const dishToAdd = clients[clientNumber].dishes[dishNumber];
            // console.log("dish", dishNumber)
            if (counterPopular < NUMBER_OF_POPULAR) {
              setPopular((prevState) => [...prevState, dishToAdd]);
              counterPopular = counterPopular + 1;
            }
            if (counterVeggie < NUMBER_OF_VEGGIE) {
              if (dishToAdd.vegetarian) {
                setVeggie((prevState) => [...prevState, dishToAdd]);
                counterVeggie = counterVeggie + 1;
              }
            }
          }
        }
      });
    };

    setPopular(emptyDishesArray);
    setVeggie(emptyDishesArray);
    getPopular();
  }, []);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <div className="CuisineTitle">You have selected all dishes!</div>
      <div className="VeggiePosition">
        <Veggie veggie={veggie} />
      </div>
      <Popular popular={popular} />
    </div>
  );
}

export default AllMain;
