import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import {Button, Icon, Row, Input, Col, Card} from 'react-materialize';

export default class LoginPage extends React.Component {
  render() {
    return (
        <div>
          <div>
            <div>
              <h3>Login</h3>
              <hr />

              <Row>
                  <Input s={3} label="First Name" />
                  <Input type="email" label="Email" s={3} />
                  <Input type="password" label="Password" s={3} />
              </Row>
              <div>
                <Button node='a' waves='light'><Icon right>file_cloud</Icon>login button</Button>
              </div>

              <Row>
                <h3>Sign Up with Google</h3>
                <hr />
                <Button node='a' waves='light'><Icon right>file_cloud</Icon>Google button</Button>
              </Row>

              <div>
                <h3>Sign Up</h3>
                <hr />
                <Row>
                    <Input s={3} label="First Name" />
                    <Input type="email" label="Email" s={3} />
                    <Input type="password" label="Password" s={3} />
                </Row>
                <Button node='a' waves='light'><Icon right>file_cloud</Icon>Sign Up button</Button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
