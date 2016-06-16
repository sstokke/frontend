import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import {Button, Icon, Row, Input, Col, Card} from 'react-materialize';

export default class LoginPage extends React.Component {
  render() {
    return (
      <Row>
        <Col m={6} s={12} class="auth-form">
          <h3>Login</h3>
          <hr />
          <Row><Input s={3} label="First Name" /></Row>
          <Row><Input type="email" label="Email" s={3} /></Row>
          <Row><Input type="password" label="Password" s={3} /></Row>
          <div>
            <Button node='a' waves='light'><Icon right>file_cloud</Icon>login button</Button>
          </div>
        </Col>
        <Col m={6} s={12} class="auth-form">
          <h3>Sign Up</h3>
          <hr />
          <Input s={3} label="First Name" />
          <Input type="email" label="Email" s={3} />
          <Input type="password" label="Password" s={3} />
          <div>
            <Button node='a' waves='light'><Icon right>file_cloud</Icon>Sign Up button</Button>
          </div>
        </Col>
      </Row>

    );
  }
}
