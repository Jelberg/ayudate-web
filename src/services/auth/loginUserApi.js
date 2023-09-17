const _email = process.env.REACT_APP_EMAIL;
const _password = process.env.REACT_APP_PASSWORD;

export function loginApi(email, password) {
  if (email === _email && password === _password) {
    return true;
  } else return false;
}
