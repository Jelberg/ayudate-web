import React, { useEffect } from "react";
import { Route, Router, useLocation, Redirect } from "wouter";
import Home from "../pages/homePage/Home.js";
import Login from "../pages/loginPage/Login.js";
import SignUp from "../pages/signUpPage/SignUp.js";
import useAuth from "../hooks/useAuth.js";

const Routes = () => {
  const { auth } = useAuth();
  const [location, setLocation] = useLocation();

  console.log(location);

  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
};

export default Routes;
