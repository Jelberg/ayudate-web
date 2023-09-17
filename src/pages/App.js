import useAuth from "../hooks/useAuth.js";
import Login from "./loginPage/Login";
import Home from "./homePage/Home";

export default function App() {
  const { auth } = useAuth();

  return auth === undefined ? <Login /> : <Home />;
}
