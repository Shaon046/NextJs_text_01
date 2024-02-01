import axios from "axios";

export default async function handler() {
  const data = await axios
    .get("https://finalspaceapi.com/api/v0/episode/")
    .then((data) => data.data)
    .catch((err) => console.log(err));

return data

  
}
