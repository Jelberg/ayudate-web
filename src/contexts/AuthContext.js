import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  token: () => {},
  logout: () => {},
});

//Acciones que va a hacer el contexto
export function AuthProvider(props) {
  const { children } = props;

  const [auth, setAuth] = useState(undefined);

  const token = (setToken) => {
    setAuth(setToken);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    token,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
