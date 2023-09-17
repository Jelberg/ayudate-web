import { useState } from "react";
import { loginApi } from "../../services/auth/loginUserApi.js";
import { Notification } from "../notification/Notification.js";
import { getAccessTokenApi } from "../../services/auth/getAccessTokenApi.js";
import { ToastContainer } from "react-toastify";
import useAuth from "../../hooks/useAuth.js";

export default function LoginForm() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPass = (event) => {
    setPass(event.target.value);
  };

  const userLogin = async () => {
    const res = await loginApi(email, pass);
    if (res) {
      await Notification("Inicio de sesion correcto 😘", "success");
      await getAccessTokenApi().then((accessToken) => {
        token(accessToken);
      });
    } else await Notification("Datos Errones");
  };

  return (
    <div className="grid h-full w-full rounded-md border-2 border-white p-12 grid-cols-1 place-content-center space-y-8">
      <div>
        <label className="text-white">Correo</label>
        <input
          onChange={handleInputEmail}
          name="email"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:'Correo' placeholder:text-slate-400"
          type="email"
        />
      </div>
      <div>
        <label className="text-white">Contraseña</label>
        <input
          onChange={handleInputPass}
          name="pass"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:'Contraseña' placeholder:text-slate-400"
          type="password"
        />
      </div>
      <div>
        <button
          onClick={userLogin}
          className="text-white rounded-md font-bold py-3 pl-2 pr-3 shadow-sm h-19 bg-violet-950 w-full text-center"
        >
          Iniciar Sesion
        </button>
      </div>
      <div className="grid place-content-center text-white  text-center">
        <h1> - O - </h1>
        <a className="font-bold text-lg" href="">
          REGISTRARSE
        </a>
      </div>
      <ToastContainer />
    </div>
  );
}
