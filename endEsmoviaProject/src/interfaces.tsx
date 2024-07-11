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
    placeholder:string,
    design: string,
    emitFunction: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    errorCheck: (e: React.FocusEvent<HTMLInputElement>) =>void
}
export interface SurferProps {
    path: string,
    destiny: string
}
