import {Credencials, CredencialsResult} from "../interfaces";

const root = "https://dummyjson.com/";
const root2 = "https://api.themoviedb.org/3/";
const movie_api_key = "210d6a5dd3f16419ce349c9f1b200d6d";
import "../interfaces"
export async function LoginMe(credentials:Credencials) : Promise<CredencialsResult> {
  let rawData : Response = await fetch(`${root}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: credentials.name,
      password: credentials.password,
      expiresInMins: 30, // optional, defaults to 60
    }),
  });

  let data : CredencialsResult= await rawData.json();
  console.log(data)
  return data;
}
export default LoginMe
