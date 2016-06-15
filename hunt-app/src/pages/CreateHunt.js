import React from 'react';
import DocumentTitle from 'react-document-title';

export default class CreateHunt extends React.Component {
  getHunts () {
    $.ajax({
      type: 'GET',
      url: '/api/hunts',
      datatype: 'jsonp',
      success: function(data) {
        // this.setState(data);
        console.log(data);
      }
    })
  };

  render () {
    return (
      <div className={"row"}>
        <div>
          <h4 className={"blue-text"}> Create a Scavenger Hunt </h4>
        </div>
        <div className={"row"}>
          <form name="huntForm" className={"col m3"}>
            <label> Hunt Name
            <input type="text" name="hunt_name" onChange={this.getHunts}/>
            </label>
            <label> Hunt Date
            <input type="date" name="date"/>
            </label>
            <label> Start Time
            <input type="time" name="start_time"/>
            </label>
            <label> End Time
            <input type="time" name="end_time"/>
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
