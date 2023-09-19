import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row p-8 bg-transparent bg-opacity-5 shadow-lg md:full ">
      <div className="container mx-auto flex items-center h-24">
        <h1 className="text-purple-950 text-2xl">Fundacion Ayudate</h1>
      </div>
      <nav className="contents font-semibold text-base lg:text-lg">
        <ul className="mx-auto flex items-center">
          <li className="p-5 xl:p-8 hover:underline underline-offset-8">
            <a href="">
              <span>Home</span>
            </a>
          </li>
          <li className="p-5 xl:p-8 hover:underline underline-offset-8">
            <a href="">
              <span>Modulos</span>
            </a>
          </li>
        </ul>
      </nav>
      <button className="border w-64 rounded-full font-bold px-2">
        Cerrar Sesion
      </button>
    </header>
  );
}
