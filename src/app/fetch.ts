// import {fetch} from "next/dist/compiled/@edge-runtime/primitives";

import {additionalURLPath, fetchURL} from "@/app/classes";

export async function fetchData() {
    console.log("Fetching data...")
    const data = await fetch(`${fetchURL}${additionalURLPath}`)
    return data.json()
}