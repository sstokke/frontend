import React from 'react';
import DocumentTitle from 'react-document-title';


export default class CreateHunt extends React.Component {
  render () {
    return (
      <div className={"row"}>
        <div className={"row"}>
        <form nane="huntForm" className={"col m6"}>
          <label> Hunt Name
          <input type="text" name="hunt_name"/>
          </label>
          <label> Hunt Date
          <input type="date" name="date"/>
          </label>
          <label> Start Time
          <input type="number" name="start_time"/>
          </label>
          <label> End Time
          <input type="number" name="end_time"/>
          </label>
          <label> Location
          <input type="text" name="general_location"/>
          </label>
          <label> Description
          <input type="text" name="general_description"/>
          </label>
        </form>
        </div>
      </div>
      )
  };
}
