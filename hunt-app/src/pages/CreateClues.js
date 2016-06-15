import React from 'react';
import DocumentTitle from 'react-document-title';

// !!Need to retrieve Hunt ID and then update Hunt ID with clue data upon completion of form

export default class CreateClues extends React.Component {
  initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.598962, lng: -122.333799},
        zoom: 13
      });
      var input = /** @type {!HTMLInputElement} */(
          document.getElementById('pac-input'));

      var types = document.getElementById('type-selector');
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      var infowindow = new google.maps.InfoWindow();
      var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
      });

      autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("Autocomplete's returned place contains no geometry");
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setIcon(/** @type {google.maps.Icon} */({
          icon:'pinkball.png',
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
      });

      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      function setupClickListener(id, types) {
        var radioButton = document.getElementById(id);
        radioButton.addEventListener('click', function() {
          autocomplete.setTypes(types);
        });
      }
    };

  render () {
    return (
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
              <input id="pac-input" class="controls" type="text" placeholder="Enter a location">

          <GoogleMap></GoogleMap>
        </div>
      </div>
    )
  };
}
