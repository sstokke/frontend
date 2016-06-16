import React from 'react';
import DocumentTitle from 'react-document-title';

export default class InviteUsers extends React.Component {

  lastInvite(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/api/invites',
      data: $('#inviteUser').serialize()
    });
    $('#name').val('');
    $('#email').val('');
  }

  inviteAnother(e) {
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
      <div className={"row"}>
        <div>
          <h4 className={"red-text"}> Invite Users </h4>
          <h6 className={"invite-subhead"}> for "hunt name goes here" </h6>
        </div>
        <div className={"row"}>
          <form id="inviteUser">
            <div className={"row"}>
              <div className={"col m3"}>
                <label> RSVP By:
                  <input id="rsvp_by" type="date" name="rsvp_by"/>
                </label>
              </div>
            </div>
            <div className={"col m3"}>
              <label> Name
                <input id="name" type="text" name="name"/>
              </label>
            </div>
            <div className={"col m3 md-offset-1"}>
              <label> Email
                <input id="email" type="email" name="email"/>
              </label>
            </div>
            <div className={"valign-wrapper"}>
              <button id="invite-another" className={"btn invite-button"} onClick={this.inviteAnother}> Invite User + Invite Another! </button>
              <span className={"push-down"}> or </span>
              <button id="last-invite" className={"btn invite-button"} onClick={this.lastInvite}> Invite User + Return to Hunt Page </button>
            </div>
          </form>
        </div>
        <h3> Invited Users </h3>
      </div>
    )
  };
}
