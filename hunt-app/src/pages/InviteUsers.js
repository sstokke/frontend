import React from 'react';
import DocumentTitle from 'react-document-title';

export default class InviteUsers extends React.Component {

  callAction(action, callback) {
    $.ajax({
      type: 'POST',
      url: '/api/users',
      data: {
        action: action,
        form: $('#inviteUser').serialize()
      },
      success: function(response) {
        callback (response);
      }
    })
  };

  $('#last-invite').on('click', function(e) {
    e.preventDefault();
    callAction('last invite'), function (response) {
      console.log ('user was added, last invite function working')
    }
  });

  $('#invite-another').on('click', function(e) {
    e.preventDefault();
    callAction('invite another'), function (response) {
      console.log ('user was added, another will be invited')
    }
  });

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
                  <input type="date" name="rsvp_by"/>
                </label>
              </div>
            </div>
            <div className={"col m3"}>
              <label> Name
                <input type="text" name="invite_01"/>
              </label>
            </div>
            <div className={"col m3 md-offset-1"}>
              <label> Email
                <input type="email" name="hunt_name"/>
              </label>
            </div>
            <div className={"valign-wrapper"}>
              <button id="invite-another" className={"btn invite-button"}> Invite User + Invite Another! </button>
              <span className={"push-down"}> or </span>
              <button id="last-invite" className={"btn invite-button"}> Invite User + Return to Hunt Page </button>
            </div>
          </form>
        </div>
        <h3> Invited Users </h3>
      </div>
    )
  };
}
