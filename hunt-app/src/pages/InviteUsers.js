import React from 'react';
import DocumentTitle from 'react-document-title';

export default class InviteUsers extends React.Component {
  render () {
    return (
      <div className={"row"}>
        <div>
          <h4 className={"red-text"}> Invite Users </h4>
        </div>
        <div className={"row"}>
          <form name="inviteUsers">
            <div className={"col m3"}>
              <label> RSVP By:
                <input type="date" name="rsvp_by"/>
              </label>
            </div>
            <div className={"col m4"}>
              <label> Name
                <input type="text" name="invite_01"/>
              </label>
            </div>
            <div className={"col m5 md-offset-1"}>
              <label> Email
                <input type="email" name="hunt_name"/>
              </label>
            </div>
          </form>
        </div>
      </div>
    )
  };
}
