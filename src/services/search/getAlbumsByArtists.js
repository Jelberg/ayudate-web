import axios from "axios";
import { SPOTIFY_URL_ARTISTS } from "../../const";

export default async function getAlbumsByArtistsApi(artist, auth) {
  const url = `${SPOTIFY_URL_ARTISTS}/${artist}/albums`;

  try {
    const response = await axios.get(url, {
      //params: data,
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
}
