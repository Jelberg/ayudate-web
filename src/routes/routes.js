import React, {useEffect} from 'react';
import {Route, Router, useLocation, Redirect, Switch} from 'wouter';
import Home from '../pages/homePage/Home.js';
import Login from '../pages/loginPage/Login.js';
import SignUp from '../pages/signUpPage/SignUp.js';
import Notfound from '../pages/utilsPage/Notfound.js';
import {useUserContext} from '../contexts/UserContext.js';

const Routes = () => {
  const {user} = useUserContext();

  console.log(user);

  return (
    <Router>
      {user !== '' ? (
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={Notfound} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={Notfound} />
        </Switch>
      )}
    </Router>
  );
};

export default Routes;
