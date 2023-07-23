import {Client, Dish} from "@/app/classes";
import moment from "moment";
import {addDishDB, getClientsDB, removeClientDB, removeDishDB, setNewClientDB} from "@/app/Firebase";

export async function fetchData(): Promise<Client[]> {
    console.log("Fetching data...")
    // const data = await fetch(`${fetchURL}${additionalURLPath}`)
    // return data.json()

    const res = await getClientsDB()
    return res as Client[]
}

export async function addDish(client: Client, dish: Dish): Promise<Client[]> {
    console.log("Adding dish...")
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

    const res = await addDishDB(client.token, dish)
    return res as Client[]
}

export async function deleteDish(client: Client, dish: Dish): Promise<Client[]> {
    console.log("Removing dish...")
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
    const res = await removeDishDB(client.token, dish)
    return res as Client[]
}

export async function addClient(client: Client) {
    console.log("Adding new client...")
    // const url = fetchURL + additionalURLPath
    // client.id = moment().unix()
    // const fetchInit = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(client)
    // }

    const res = await setNewClientDB(client)
    return res as Client[]
}

export async function removeClient(client: Client) {
    console.log("Removing client...")
    // const url = fetchURL + additionalURLPath + "/" + client.id
    // const fetchInit = {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    const res = await removeClientDB(client)
    return res as Client[]
}
