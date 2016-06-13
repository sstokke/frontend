import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
<<<<<<< HEAD
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, LoginRoute, HomeRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
=======
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

>>>>>>> 32edfc283c3fa79da0f78087bfea122e6525d9e8

ReactStormpath.init();
ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <HomeRoute path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <LoginRoute path='/login' component={LoginPage} />
    <AuthenticatedRoute>
      <HomeRoute path='/profile' component={ProfilePage} />
    </AuthenticatedRoute>
      <Route path='/register' component={RegistrationPage} />
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
