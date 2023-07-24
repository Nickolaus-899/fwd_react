import { fetchData } from "@/app/fetch";
import { Client } from "@/app/classes";

export function fetchAdminData() {
  const res: Promise<Client[]> = fetchData();
  return res;
}
