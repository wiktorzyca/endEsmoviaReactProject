export interface Answer {
    message: string,
    success: boolean,
    data: Joke
}

export interface Joke {
    icon_url :string,
    id: string,
    url: string | null,
    value: string
}
