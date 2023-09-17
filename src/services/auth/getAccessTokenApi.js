//import { useState } from "react";
import axios from "axios";
import { SPOTIFY_URL_ACCESTOKEN } from "../../const/spotify";
import qs from "qs";
import { headers } from "../search/const.js";

export async function getAccessTokenApi() {
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      SPOTIFY_URL_ACCESTOKEN,
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
}
