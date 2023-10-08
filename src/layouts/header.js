import {useUserContext} from '../contexts/UserContext';
import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import {useLocation} from 'wouter';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const {logout, user} = useUserContext();
  const imgLogo = process.env.PUBLIC_URL + '/logofundayudate.jpg';
  const genericAvatar = process.env.PUBLIC_URL + '/profile.png';
  const [, setLocation] = useLocation();

  const navigation = [
    {name: 'Home', location: 'home', current: true},
    {name: 'Módulos', location: 'modules', current: false},
    {name: 'Videos', location: '', current: false},
  ];

  const goTo = location => {
    setLocation('/' + location);
  };

  return (
    <header className="bg-white">
      <nav
        className="bg-white w-screen mx-auto flex items-center justify-between p-8 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a
            className="-m-1.5 p-1.5"
            onClick={() => {
              goTo('home');
            }}>
            <span className="sr-only">Fundacion Ayudate</span>
            <img className="w-28" src={imgLogo} alt="" />
          </a>
        </div>
        <div className="flex flex-row justify-end">
          <span>
            <b>Hola, {user.user}!</b>
          </span>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={genericAvatar}
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({active}) => (
                    <a
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700"',
                      )}>
                      Perfil
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <a
                      onClick={logout}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}>
                      Cerrar Sesion <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <a
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}>
                      Help
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full  text-sm ">
                <span className="absolute -inset-1.5" />
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {navigation.map(item => (
                  <Menu.Item key={item.name}>
                    {({active}) => (
                      <a
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => {
                          goTo(item.location);
                        }}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        )}>
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
}
