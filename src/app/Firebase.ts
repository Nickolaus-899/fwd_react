import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, addDoc} from 'firebase/firestore/lite';
import {Client} from "./classes"
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getClients() {
    const clientsCol = collection(db, 'clients');
    const clientSnapshot = await getDocs(clientsCol);
    return clientSnapshot.docs.map(doc => doc.data());
}

export async function setNewClient(client: Client) {
    const clientsCol = collection(db, 'clients');
    const clientSnapshot = await getDocs(clientsCol);
    let clients = clientSnapshot.docs;
    let clients_data = clients.map(doc => doc.data());
    let numberOfClients = Object.keys(clients_data[0]).length;

    await addDoc(clientsCol, client);
}

export async function removeClient(client: Client) {

}

export async function updateClient(prev: Client, upd: Client) {

}

