import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

export default class LoginPage extends React.Component {
  render() {
    return (
        <div>
          <div>
            <div>
              <h3>Login</h3>
              <hr />
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate"/>
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate"/>
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                  </button>
                </form>
              </div>

              <div>
                <h3>Sign Up with Facebook</h3>
                <hr />
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div>
                <h3>Sign Up</h3>
                <hr />
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                        <label for="first_name">First Name</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12">
                        <input id="email" type="email" class="validate"/>
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12">
                        <input id="password" type="password" class="validate"/>
                        <label for="password">Password</label>
                      </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i class="material-icons right">send</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
