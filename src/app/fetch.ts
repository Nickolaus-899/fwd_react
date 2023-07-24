import { Client, Dish, userInfoKey, UserTokenInfo } from "@/app/classes";
import moment from "moment";
import {
  addDishDB,
  changePasswordDB,
  getClientsDB,
  removeClientDB,
  removeDishDB,
  setNewClientDB,
} from "@/app/Firebase";
import { encodeName } from "@/app/enigma";

export async function fetchData(): Promise<Client[]> {
  console.log("Fetching data...");
  // const data = await fetch(`${fetchURL}${additionalURLPath}`)
  // return data.json()

  const res = await getClientsDB();
  return res as Client[];
}

export async function addDish(client: Client, dish: Dish): Promise<Client[]> {
  console.log("Adding dish...");
  // const url = fetchURL + additionalURLPath + "/" + client.id
  // // dish.id = moment().unix()
  // client.dishes = [...client.dishes, dish]
  // const fetchInit = {
  //     method: 'PATCH',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(client)
  // }
  dish.price = parseInt(dish.price.toString());
  dish.calories = parseInt(dish.calories.toString());

  dish.id = moment().unix();

  const res = await addDishDB(client.token, dish);
  return res as Client[];
}

export async function deleteDish(
  client: Client,
  dish: Dish
): Promise<Client[]> {
  console.log("Removing dish...");
  // const url = fetchURL + additionalURLPath + "/" + client.id
  //
  // client.dishes = [...client.dishes.filter(item => item.id !== dish.id)]
  //
  // console.log(url)
  // const fetchInit = {
  //     method: 'PATCH',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(client)
  // }
  const res = await removeDishDB(client.token, dish);
  return res as Client[];
}

export async function addClient(client: Client) {
  console.log("Adding new client...");
  // const url = fetchURL + additionalURLPath
  // client.id = moment().unix()
  // const fetchInit = {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(client)
  // }

  const res = await setNewClientDB(client);
  return res as Client[];
}

export async function removeClient(client: Client) {
  console.log("Removing client...");
  // const url = fetchURL + additionalURLPath + "/" + client.id
  // const fetchInit = {
  //     method: 'DELETE',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  // }

  const res = await removeClientDB(client);
  return res as Client[];
}

export async function changePassword(newPassword: string) {
  console.log("Changing password...");
  const user: UserTokenInfo = JSON.parse(
    localStorage.getItem(userInfoKey) as string
  );

  const newToken: string = encodeName(user.name, newPassword);

  const res = await changePasswordDB(user.token, newToken);

  const userNewInfo: UserTokenInfo = {
    token: newToken,
    name: user.name,
    admin: user.admin,
  };
  localStorage.setItem(userInfoKey, JSON.stringify(userNewInfo));
  return res as Client[];
}
