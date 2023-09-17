import axios from "axios";
import { mockFunction, cleanupMocks } from "vitest";
import { getAccessTokenApi } from "../../auth/getAccessTokenApi";
import getInfoArtist from "../getInfoArtist";
import { describe, it, expect, afterEach } from "vitest";

/*mockFunction(axios, "get", (url, options) => {
  return Promise.resolve({
    data: {
      items: {
        artists: {
          id: "id",
          name: "name",
          images: [],
        },
      },
    },
  });
});*/

describe("getInfoArtist function", () => {
  const fakeArtistId = "fake_artist_id";
  const fakeToken = "fake_token";

  afterEach(() => {
    cleanupMocks();
  });

  it("should handle errors", async () => {
    const errorMessage = "Network Error";

    // Mockea la función de inicio de sesión para retornar un token ficticio
    getAccessTokenApi.mockResolvedValue(fakeToken);

    // Simula un error en la llamada a axios
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(getInfoArtist(fakeArtistId, fakeToken)).rejects.toThrow(
      errorMessage
    );
  });
});
