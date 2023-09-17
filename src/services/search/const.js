export const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: clientId,
    password: clientSecret,
  },
};
