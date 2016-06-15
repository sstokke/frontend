import { default as React, Component } from "react";
import { GoogleMap, Marker, SearchBox } from "react-google-maps";
import DocumentTitle from 'react-document-title';
import {Button, Icon, Row, Input} from 'react-materialize';

// !!Need to retrieve Hunt ID and then update Hunt ID with clue data upon completion of form

export default class CreateClues extends Component {
  static inputStyle = {
      "border": `1px solid transparent`,
      "borderRadius": `1px`,
      "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
      "boxSizing": `border-box`,
      "MozBoxSizing": `border-box`,
      "fontSize": `14px`,
      "height": `32px`,
      "marginTop": `10px`,
      "outline": `none`,
      "padding": `0 12px`,
      "textOverflow": `ellipses`,
      "width": `400px`,
      "background-color": `white`,
    }

    static mapCenter = {
      lat: 47.598962,
      lng: -122.333799,
    }

  state = {
    bounds: null,
    center: CreateClues.mapCenter,
    markers: [],
  }

  handleBoundsChanged() {
     this.setState({
       bounds: this.refs.map.getBounds(),
       center: this.refs.map.getCenter(),
     });
   }

   handlePlacesChanged() {
     const places = this.refs.searchBox.getPlaces();
     const markers = [];

     // Add a marker for each place returned from search bar
     places.forEach(function (place) {
       markers.push({
         position: place.geometry.location,
       });
       console.log("Lat: " + place.geometry.location.lat());
       console.log("Lng: " + place.geometry.location.lng());
       console.log("Name: " + place.name);
     });

      answerName.push(places[0].name);

     // Set markers; set map center to first search result
     const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

     this.setState({
       center: mapCenter,
       markers,
     });
   }

  render() {
    return (
      <div>
        <div className={"row"}>
          <div className={"row"}>
            <h3> Create Your Clues! </h3>
          </div>
          <div className={"row"}>
            <h5> Your Scavenger Hunt: (pull hunt name) </h5>
          </div>
          <div className={"col m10"}>
            <form>
              <div className={"row"}>
                <label className={"col m6 labelsize"}> Clue #1
                  <input type="text" name="clue01"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer01"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #2
                  <input type="text" name="clue02"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer02"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #3
                  <input type="text" name="clue03"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer03"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #4
                  <input type="text" name="clue04"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer04"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #5
                  <input type="text" name="clue05"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer05"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #6
                  <input type="text" name="clue06"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer06"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #7
                  <input type="text" name="clue07"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer07"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #8
                  <input type="text" name="clue08"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer08"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #9
                  <input type="text" name="clue09"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer09"/>
                </label>
              </div>
              <div className={"row"}>
                <label className={"col m6"}> Clue #10
                  <input type="text" name="clue10"/>
                </label>
                <label className={"col m4 offset-m1"}> Answer
                  <input type="text" name="answer10"/>
                </label>
              </div>
            </form>
          </div>
        </div>

        <GoogleMap
          center={this.state.center}
          containerProps={{
            ...this.props,
            style: {
              height: `70vh`,
              width: `100vw`
            },
          }}
          defaultZoom={15}
          onBoundsChanged={::this.handleBoundsChanged}
          ref="map"
        >
          <SearchBox
            bounds={this.state.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={::this.handlePlacesChanged}
            ref="searchBox"
            placeholder="Enter Location"
            style={CreateClues.inputStyle}
          />
          {this.state.markers.map((marker, index) => (
            <Marker position={marker.position} key={index} />
          ))}
        </GoogleMap>
      </div>
    );
  }
}
