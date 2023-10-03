import React from "react";
/*
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
}*/


export default function Header() {
    return (
        <div className='navbar bg-base-100 py-4 px-8'>
            <div className='navbar-start'>
                <a to={'/'} className='flex items-center gap-4 normal-case btn btn-ghost'>
                    <img alt='Logo' className='logo w-8 md:w-12' />
                    <h1 className='text-2xl text-bold md:text-4xl'>Book App</h1>
                </a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <a to={'/'}>Libros Disponibles</a>
                    </li>
                    <li>
                        <a to={'/reading-list'}>Lista de Lectura</a>
                    </li>
                </ul>
            </div>
            <div className='navbar-end'>

                <div className='dropdown dropdown-bottom dropdown-end'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                        </svg>
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box w-52'>
                        <li className='py-2'>
                            <a to={'/'}>Libros Disponibles</a>
                        </li>
                        <li className='py-2'>
                            <a to={'/reading-list'}>Lista de Lectura</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};