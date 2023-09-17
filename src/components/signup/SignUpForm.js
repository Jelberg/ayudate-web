import { useState } from "react";
import { ToastContainer } from "react-toastify";
import useAuth from "../../hooks/useAuth.js";
import schools from "./schools.json";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [items] = useState(schools);
  const [education, setEducation] = useState("");
  const { token } = useAuth();

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleSelect = (event) => {
    setEducation(event.target.value);
    console.log(event.target.value);
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPass = (event) => {
    setPass(event.target.value);
  };

  return (
    <div className="grid h-full w-full p-12 grid-cols-1 place-content-center space-y-8">
      <div>
        <label className="text-white">Nombre y Apellidos</label>
        <input
          onChange={handleInputName}
          name="name"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:text-slate-400"
          type="text"
        />
      </div>
      <div>
        <label className="text-white">Correo</label>
        <input
          onChange={handleInputEmail}
          name="email"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:text-slate-400"
          type="email"
        />
      </div>
      <div>
        <label className="text-white">Selecciona tu colegio</label>
        <div>
          <select
            required={true}
            onChange={handleSelect}
            className="rounded-md py-3 pl-2 pr-3 h-18 w-full"
          >
            {items.map((school) => {
              return (
                <option key={school.value} value={school.value}>
                  {school.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <label className="text-white">Contraseña</label>
        <input
          onChange={handleInputPass}
          name="pass"
          maxLength={20}
          minLength={5}
          placeholder="Contraseña - Max 20"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:text-slate-400"
          type="password"
        />
      </div>
      <div>
        <button className="text-white rounded-md font-bold py-3 pl-2 pr-3 shadow-sm h-19 bg-fuchsia-700 w-full text-center">
          REGISTRARSE
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
