// json-server -p 3001 --watch db.json
export const fetchURL: string = 'http://localhost:3001'
export const additionalURLPath: string = '/clients'

export interface Dish {
    id: number,
    title: string,
    price: number,
    calories: number,
    vegetarian: boolean,
    cuisine: string,
    img: string,
    link: string
}

export interface AdminInfo {
    restaurant: string,
    cuisine: string
}

export const nullAdminInfo: AdminInfo = {
    restaurant: "",
    cuisine: ""
}

export interface Client {
    id: number,
    token: string,
    email: string,
    admin: boolean,
    admin_info: AdminInfo,
    dishes: Dish[]
}

export const nullDish: Dish = {
    id: 0,
    title: "dish",
    price: 0,
    calories: 0,
    vegetarian: false,
    cuisine: "",
    img: "",
    link: ""
}

export const emptyDishesArray: Dish[] = []
export const emptyClientsArray: Client[] = []

export const nullClient: Client = {
    id: 0,
    token: "",
    email: "",
    admin: false,
    admin_info: nullAdminInfo,
    dishes: emptyDishesArray
}


export interface UserTokenInfo {
    token: string,
    name: string,
    admin: boolean
}


export const addDishFormType: string = 'add_dish'
export const confirmationFormType: string = 'confirm'
export const addToMenuFormType: string = 'add_to_menu'
export const authFailedFormType: string = 'auth_fail'
export const authWasNotDoneFormType: string = 'auth_not_done'
export const differentPasswordsFormType: string = 'different_passwords'
export const authCompletedFormType: string = 'auth_completed'

export const nullFunction = () => {}

export const userInfoKey: string = "userInfo"
