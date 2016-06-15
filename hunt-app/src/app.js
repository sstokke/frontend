import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage, CreateHunt } from './pages';
import ReactStormpath, { Router, LoginRoute, HomeRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router } from 'react-router';
import { createHistory } from 'history';


ReactStormpath.init();
ReactDOM.render(
  <Router history={createHistory()}>
    <HomeRoute path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <LoginRoute path='/login' component={LoginPage} />
      <Route path='/createhunt' component={CreateHunt} />
      <HomeRoute path='/profile' component={ProfilePage} />
      <Route path='/register' component={RegistrationPage} />
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);