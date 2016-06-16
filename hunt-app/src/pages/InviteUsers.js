import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import {Button, Icon, Row, Input, Col, Card} from 'react-materialize';

export default class InviteUsers extends React.Component {

  inviteUser(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/api/invites',
      data: $('#inviteUser').serialize()
    });
    $('#name').val('');
    $('#email').val('');
  };

  render () {
    return (
      <Row>
        <div>
          <h2> Invites </h2>
        </div>


        <Card>
          <h4 className={"red-text"}> Invite Users </h4>
          <h6 className={"invite-subhead"}> for "hunt name goes here" </h6>

          <form id="inviteUser">

            <Col m={3}>
              <label> RSVP By:
                <input id="rsvp_by" type="date" name="rsvp_by" />
              </label>
              <label> Name
                <input id="name" type="text" name="name" />
              </label>
            </Col>


            <Row>
              <Col m={3}>
                <label> Email
                  <input id="email" type="text" name="email" />
                </label>
              </Col>              
            </Row>


            <div>
              <button className={"btn invite-button"} onClick={this.inviteUser}> Invite User </button>
              <span className={"push-down"}> or </span>
              <Link to='/reviewhunt'>
                <button className={"btn invite-button"}> Return to Hunt Page </button>
              </Link>
            </div>
          </form>


        </Card>
          <h3> Invited Users </h3>
      </Row>
    )
  };
}
