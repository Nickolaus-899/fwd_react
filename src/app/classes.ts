export const API = "https://api.spoonacular.com/recipes"

export const randomAPI = "/random"

export const complexAPI = "/complexSearch"

export const fetchURL: string = 'http://localhost:3001'
export const additionalURLPath: string = '/clients'

export interface AnswerComplex {
    id: number,
    cheap: boolean,
    image: string,
    title: string,
    vegetarian: boolean,
    diets: string[]
}

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
    name: string,
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
    name: "client",
    email: "",
    admin: false,
    admin_info: nullAdminInfo,
    dishes: emptyDishesArray
}

export interface AnswerShort {
    id: number,
    image: string,
    title: string
}

export const emptyArrayShort: AnswerShort[] = []
export const emptyVarComplex: AnswerComplex = {
    id: 0,
    cheap: false,
    image: "",
    title: "",
    vegetarian: false,
    diets: [""]
}


export const addDishFormType: string = 'add_dish'
export const confirmationFormType: string = 'confirm'

export const nullFunction = () => {}
