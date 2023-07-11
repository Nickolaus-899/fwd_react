export const API = "https://api.spoonacular.com/recipes"

export const randomAPI = "/random"

export const complexAPI = "/complexSearch"

export interface AnswerComplex {
    id: number,
    cheap: boolean,
    image: string,
    title: string,
    vegetarian: boolean,
    diets: string[]
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