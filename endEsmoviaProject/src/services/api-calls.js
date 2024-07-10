const root = "https://dummyjson.com/";
const root2 = "https://api.themoviedb.org/3/";
const movie_api_key = "210d6a5dd3f16419ce349c9f1b200d6d";

export async function LoginMe(credentials) {
  let rawData = await fetch(`${root}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: credentials.name,
      password: credentials.password,
      expiresInMins: 30, // optional, defaults to 60
    }),
  });

  let data = await rawData.json();
  return data;
}

