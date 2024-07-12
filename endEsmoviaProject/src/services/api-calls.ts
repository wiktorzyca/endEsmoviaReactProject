import {Credencials, CredencialsResult, RecipesResponce} from "../interfaces";
import "../interfaces"

const root = "https://dummyjson.com/";

export async function LoginMe(credentials:Credencials) : Promise<CredencialsResult> {
  let rawData : Response = await fetch(`${root}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: credentials.name,
      password: credentials.password,
      expiresInMins: 30,
    }),
  });

  let data : CredencialsResult= await rawData.json();
  console.log(data)
  return data;
}

export async function bringRecipies() : Promise<RecipesResponce>{
  const rawData : Response= await fetch(
      `${root}recipes`
  );

  return await rawData.json();
}
export default LoginMe
