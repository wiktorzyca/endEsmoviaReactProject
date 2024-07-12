export interface Answer {
    message: string,
    success: boolean,
    data: Joke
}

export interface Joke {
    icon_url: string,
    id: string,
    url: string | null,
    value: string
}

export interface CredencialsResult {
    email: string,
    firstName: string,
    gender: string,
    id: number,
    image: string,
    lastname: string,
    refreshToken: string,
    token: string,
    username: string
}

export interface Credencials {
    name: string,
    password: string
}

export interface CredencialsErrors {
    nameError: string,
    passwordError: string
}

export interface CInputProps {
    type: string,
    name: string,
    placeholder: string,
    design: string,
    emitFunction: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errorCheck: (e: React.FocusEvent<HTMLInputElement>) => void
}

export interface SurferProps {
    path: string,
    destiny: string
}
export interface Recipe{
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image : string,
    rating: number,
    reviewCount:number,
    mealType: string[]
}
export interface RecipesResponce {
    recipes: Recipe[],
    total: number,
    skip: number,
    limit: number
}