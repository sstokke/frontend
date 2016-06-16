import React from 'react';
import DocumentTitle from 'react-document-title';

export default class CreateHunt extends React.Component {

  state = {
    data: [{}]
  }

  getHunts () {
    $.ajax({
      type: 'POST',
      url: '/api/hunts',
      datatype: 'jsonp',
      success: data => {
        this.setState({data: data});
        console.log(data);
      }
    })
      data: $('#huntForm').serialize()
  };

  render () {
    return (
      <div className={"row"}>
        {this.state.data[0].hunt_name}
        <div>
          <h4 className={"blue-text"}> Create a Scavenger Hunt </h4>
        </div>
        <div className={"row"}>
          <form id="huntForm" className={"col m3"} onSubmit={this.onSubmit} method="post">
            <label> Hunt Name
            <input type="text" name="hunt_name" onChange={this.getHunts.bind(this)}/>
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
            <input type="text" name="location"/>
            </label>
            <label> Description
            <input type="text" name="description"/>
            </label>
            <button> Submit </button>
          </form>
        </div>
      </div>
    )
  };
}
