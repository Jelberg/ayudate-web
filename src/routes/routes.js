import React from 'react';
import {Route, Router, Switch} from 'wouter';
import Home from '../pages/homePage/Home.js';
import Login from '../pages/loginPage/Login.js';
import SignUp from '../pages/signUpPage/SignUp.js';
import Notfound from '../pages/utilsPage/Notfound.js';
import ModulePage from '../pages/modulesPage/ModulePage.js';
import LearningPage from '../pages/learningPage/LearningPage.js';
import TestPage from '../pages/testPage/TestPage.js';
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
          <Route path="/modules" component={ModulePage} />
          <Route path="/learning/:module" component={LearningPage} />
          <Route path="/test/:module" component={TestPage} />
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
