import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import searchApi from "../seachApi";
import { describe, it, expect, toEqual, toThrow } from "vitest";
import { SPOTIFY_URL_SEARCH } from "../../../const";

describe("searchApi function", () => {
  it("should fetch successfully data from an API", async () => {
    const auth = "your_auth_token";
    const text = "jess";
    const type = "artist";
    const responseData = {
      /* Mock the response data here */
    };
    const mock = new MockAdapter(axios);

    mock.onGet(SPOTIFY_URL_SEARCH).reply(200, responseData);

    const result = await searchApi(auth, text, type);

    expect(result).toEqual(responseData);
  });

  it("should handle errors", async () => {
    const auth = "your_auth_token";
    const text = "jess";
    const type = "artist";
    const errorMessage = "Network Error";
    const mock = new MockAdapter(axios);

    mock.onGet(SPOTIFY_URL_SEARCH).networkError();

    await expect(searchApi(auth, text, type)).rejects.toThrow(errorMessage);
  });
});
