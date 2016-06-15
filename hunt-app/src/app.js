import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage, CreateHunt, CreateClues, InviteUsers } from './pages';
import ReactStormpath, { Router, LoginRoute, HomeRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, withRouter } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';


ReactStormpath.init();
ReactDOM.render(
  <Router history={createHashHistory()}>
    <HomeRoute path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <LoginRoute path='/login' component={LoginPage} />
      <Route path='/createhunt' component={CreateHunt} />
      <Route path='/createclues' component={CreateClues} />
      <Route path='/inviteusers' component={InviteUsers} />
    <AuthenticatedRoute>
      <HomeRoute path='/profile' component={ProfilePage} />
    </AuthenticatedRoute>
      <Route path='/register' component={RegistrationPage} />
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
