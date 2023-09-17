import React from "react";
import { Route, Link, Router } from "wouter";
import Home from "../pages/homePage/Home.js";
import Login from "../pages/loginPage/Login.js";
import useAuth from "../hooks/useAuth.js";

const Routes = () => {
  const { auth } = useAuth();
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Router>
  );
};

export default Routes;
