import axios from "axios";
import { SPOTIFY_URL_ARTISTS } from "../../const";

export default async function getInfoArtist(id, auth) {
  const url = `${SPOTIFY_URL_ARTISTS}/${id}`;

  console.log(url);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
}
