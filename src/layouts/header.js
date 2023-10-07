import {useUserContext} from '../contexts/UserContext';

export default function Header() {
  const {logout} = useUserContext();
  const imgLogo = process.env.PUBLIC_URL + '/logov2.jpg';

  return (
    <header className="relative bg-white">
      <nav
        className="fixed bg-white top-0 left-0 right-0 w-screen mx-auto flex items-center justify-between p-8 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Fundacion Ayudate</span>
            <img className="w-16" src={imgLogo} alt="" />
          </a>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            onClick={logout}
            className="text-sm font-semibold leading-6 text-gray-900">
            Cerrar Sesión <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
