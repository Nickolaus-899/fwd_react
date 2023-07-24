import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Client, Dish } from "./classes";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of clients from your database

async function getClientsDocs() {
  const clientsCol = collection(db, "clients");
  const clientSnapshot = await getDocs(clientsCol);
  return clientSnapshot.docs;
}
export async function getClientsDB() {
  const clientsCol = collection(db, "clients");
  const clientSnapshot = await getDocs(clientsCol);
  return clientSnapshot.docs.map((doc) => doc.data());
}

export async function setNewClientDB(client: Client) {
  const clientsCol = collection(db, "clients");
  const clientSnapshot = await getDocs(clientsCol);
  let clients = clientSnapshot.docs;
  let clients_data = clients.map((doc) => doc.data());
  let numberOfClients = Object.keys(clients_data[0]).length;

  await addDoc(clientsCol, client);

  return await getClientsDB();
}

export async function addDishDB(token: string, dish: Dish) {
  let clientsDocs = await getClientsDocs();
  let condition = true;
  clientsDocs.map((item) => {
    if (condition && item.data().token === token) {
      condition = false;

      updateDoc(item.ref, {
        dishes: [...item.data().dishes, dish],
      });
    }
  });

  return await getClientsDB();
}

export async function removeDishDB(token: string, dish: Dish) {
  let clientsDocs = await getClientsDocs();
  let condition = true;
  clientsDocs.map((item) => {
    if (condition && item.data().token === token) {
      condition = false;

      updateDoc(item.ref, {
        dishes: item.data().dishes.filter((item: Dish) => item.id !== dish.id),
      });
    }
  });

  return await getClientsDB();
}

export async function removeClientDB(client: Client) {
  let clientsDocs = await getClientsDocs();
  let condition = true;
  clientsDocs.map((item) => {
    if (condition && item.data().token === client.token) {
      condition = false;

      // const docRef = doc(db, 'clients', client.id)
      deleteDoc(item.ref);
    }
  });

  return await getClientsDB();
}

export async function changePasswordDB(oldToken: string, newToken: string) {
  let clientsDocs = await getClientsDocs();
  let condition = true;
  clientsDocs.map((item) => {
    if (condition && item.data().token === oldToken) {
      condition = false;

      updateDoc(item.ref, {
        token: newToken,
      });
    }
  });

  return await getClientsDB();
}
