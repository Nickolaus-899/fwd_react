import {additionalURLPath, Client, Dish, fetchURL} from "@/app/classes";
import moment from "moment";

export async function fetchData(): Promise<Client[]> {
    console.log("Fetching data...")
    const data = await fetch(`${fetchURL}${additionalURLPath}`)
    return data.json()
}

export async function addDish(client: Client, dish: Dish): Promise<Client[]> {
    console.log("Adding dish...")
    const url = fetchURL + additionalURLPath + "/" + client.id
    dish.id = moment().unix()
    client.dishes = [...client.dishes, dish]
    const fetchInit = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    }

    const res = await fetch(url, fetchInit)
    return res.json()
}

export async function deleteDish(client: Client, dish: Dish): Promise<Client[]> {
    console.log("Removing dish...")
    const url = fetchURL + additionalURLPath + "/" + client.id

    client.dishes = [...client.dishes.filter(item => item.id !== dish.id)]

    console.log(url)
    const fetchInit = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    }
    const res = await fetch(url, fetchInit)
    return res.json()
}
