exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 56342:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 71089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ encodeName),
/* harmony export */   T: () => (/* binding */ decodeToken)
/* harmony export */ });
function toHex(value) {
    let res = "";
    let someNumber = value;
    while(someNumber > 0){
        let numberToAdd = someNumber % 16;
        if (numberToAdd < 10) {
            res = (someNumber % 16).toString() + res;
        } else {
            let letter = String.fromCharCode(numberToAdd + 55);
            res = letter + res;
        }
        someNumber = Math.floor(someNumber / 16);
    }
    return res;
}
function fromHex(value) {
    return parseInt(value, 16);
}
function encodeName(value, key) {
    let pos = 0;
    let token = "";
    for(let i = 0; i < value.length; i++){
        let code = value.charCodeAt(i) + key.charCodeAt(pos);
        token = token + toHex(code);
        pos = pos + 1;
        if (pos === key.length) {
            pos = 0;
        }
    }
    return token;
}
function decodeToken(token, key) {
    let pos = 0;
    let value = "";
    for(let i = 0; i < token.length; i = i + 2){
        let code = fromHex(token[i] + token[i + 1]);
        code = code - key.charCodeAt(pos);
        value = value + String.fromCharCode(code);
        pos = pos + 1;
        if (pos === key.length) {
            pos = 0;
        }
    }
    return value;
}


/***/ }),

/***/ 38612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZF: () => (/* binding */ addClient),
  $H: () => (/* binding */ addDish),
  Cp: () => (/* binding */ changePassword),
  oT: () => (/* binding */ deleteDish),
  rQ: () => (/* binding */ fetchData),
  CG: () => (/* binding */ removeClient)
});

// EXTERNAL MODULE: ./src/app/classes.ts
var classes = __webpack_require__(87073);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(17370);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var dist = __webpack_require__(31288);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.mjs + 2 modules
var firestore_dist = __webpack_require__(76853);
;// CONCATENATED MODULE: ./src/app/Firebase.ts


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
const app = (0,dist/* initializeApp */.ZF)(firebaseConfig);
const db = (0,firestore_dist/* getFirestore */.ad)(app);
// Get a list of clients from your database
async function getClientsDocs() {
    const clientsCol = (0,firestore_dist/* collection */.hJ)(db, "clients");
    const clientSnapshot = await (0,firestore_dist/* getDocs */.PL)(clientsCol);
    return clientSnapshot.docs;
}
async function getClientsDB() {
    const clientsCol = (0,firestore_dist/* collection */.hJ)(db, "clients");
    const clientSnapshot = await (0,firestore_dist/* getDocs */.PL)(clientsCol);
    return clientSnapshot.docs.map((doc)=>doc.data());
}
async function setNewClientDB(client) {
    const clientsCol = (0,firestore_dist/* collection */.hJ)(db, "clients");
    const clientSnapshot = await (0,firestore_dist/* getDocs */.PL)(clientsCol);
    let clients = clientSnapshot.docs;
    let clients_data = clients.map((doc)=>doc.data());
    let numberOfClients = Object.keys(clients_data[0]).length;
    await (0,firestore_dist/* addDoc */.ET)(clientsCol, client);
    return await getClientsDB();
}
async function addDishDB(token, dish) {
    let clientsDocs = await getClientsDocs();
    let condition = true;
    clientsDocs.map((item)=>{
        if (condition && item.data().token === token) {
            condition = false;
            (0,firestore_dist/* updateDoc */.r7)(item.ref, {
                dishes: [
                    ...item.data().dishes,
                    dish
                ]
            });
        }
    });
    return await getClientsDB();
}
async function removeDishDB(token, dish) {
    let clientsDocs = await getClientsDocs();
    let condition = true;
    clientsDocs.map((item)=>{
        if (condition && item.data().token === token) {
            condition = false;
            (0,firestore_dist/* updateDoc */.r7)(item.ref, {
                dishes: item.data().dishes.filter((item)=>item.id !== dish.id)
            });
        }
    });
    return await getClientsDB();
}
async function removeClientDB(client) {
    let clientsDocs = await getClientsDocs();
    let condition = true;
    clientsDocs.map((item)=>{
        if (condition && item.data().token === client.token) {
            condition = false;
            // const docRef = doc(db, 'clients', client.id)
            (0,firestore_dist/* deleteDoc */.oe)(item.ref);
        }
    });
    return await getClientsDB();
}
async function changePasswordDB(oldToken, newToken) {
    let clientsDocs = await getClientsDocs();
    let condition = true;
    clientsDocs.map((item)=>{
        if (condition && item.data().token === oldToken) {
            condition = false;
            (0,firestore_dist/* updateDoc */.r7)(item.ref, {
                token: newToken
            });
        }
    });
    return await getClientsDB();
}

// EXTERNAL MODULE: ./src/app/enigma.ts
var enigma = __webpack_require__(71089);
;// CONCATENATED MODULE: ./src/app/fetch.ts




async function fetchData() {
    console.log("Fetching data...");
    // const data = await fetch(`${fetchURL}${additionalURLPath}`)
    // return data.json()
    const res = await getClientsDB();
    return res;
}
async function addDish(client, dish) {
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
    dish.id = moment_default()().unix();
    const res = await addDishDB(client.token, dish);
    return res;
}
async function deleteDish(client, dish) {
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
    return res;
}
async function addClient(client) {
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
    return res;
}
async function removeClient(client) {
    console.log("Removing client...");
    // const url = fetchURL + additionalURLPath + "/" + client.id
    // const fetchInit = {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    const res = await removeClientDB(client);
    return res;
}
async function changePassword(newPassword) {
    console.log("Changing password...");
    const user = JSON.parse(localStorage.getItem(classes/* userInfoKey */.gZ));
    const newToken = (0,enigma/* encodeName */.Q)(user.name, newPassword);
    const res = await changePasswordDB(user.token, newToken);
    const userNewInfo = {
        token: newToken,
        name: user.name,
        admin: user.admin
    };
    localStorage.setItem(classes/* userInfoKey */.gZ, JSON.stringify(userNewInfo));
    return res;
}


/***/ })

};
;