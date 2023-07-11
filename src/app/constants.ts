export const API = "https://api.spoonacular.com/recipes"

export const randomAPI = "/random"

export const complexAPI = "/complexSearch"

export interface AnswerRandom {
    id: number,
    cheap: boolean,
    image: string,
    title: string,
    vegan: boolean,
    diets: string[]
}

export interface AnswerComplex {
    id: number,
    image: string,
    title: string
}

export const emptyArrayRand: AnswerRandom[] = []
export const complexArrayRand: AnswerComplex[] = []