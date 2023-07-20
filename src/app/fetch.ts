// import {fetch} from "next/dist/compiled/@edge-runtime/primitives";

import {additionalURLPath, Client, Dish, fetchURL} from "@/app/classes";

export async function fetchData() {
    console.log("Fetching data...")
    const data = await fetch(`${fetchURL}${additionalURLPath}`)
    return data.json()
}

export async function addDish(client: Client, dish: Dish) {
    const url = fetchURL + additionalURLPath + "/" + client.id

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