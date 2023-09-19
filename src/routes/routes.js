import React, { useEffect } from "react";
import { Route, Router, useLocation, Redirect, Switch } from "wouter";
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
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Switch>
        <Redirect from="/" exact to="/home" Home />
      </Switch>
    </Router>
  );
};

export default Routes;
