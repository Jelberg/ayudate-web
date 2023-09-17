import axios from "axios";
import { SPOTIFY_URL_SEARCH } from "../../const";

export default async function searchApi(auth, text = "jess", type = "artist") {
  const data = {
    q: text,
    type: type,
    market: "ES",
    limit: 15,
    offset: 5,
  };

  try {
    const response = await axios.get(SPOTIFY_URL_SEARCH, {
      params: data,
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
