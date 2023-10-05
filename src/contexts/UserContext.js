import {createContext, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const UserContext = createContext({
  login: () => {},
  logout: () => {},
  user: '',
});

export function UserProvider({children}) {
  const [user, setUser] = useLocalStorage('');

  const login = user => {
    setUser(user);
  };

  const logout = () => {
    setUser('');
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
