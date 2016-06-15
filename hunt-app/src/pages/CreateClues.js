// import React from 'react';
// import DocumentTitle from 'react-document-title';
//
// // !!Need to retrieve Hunt ID and then update Hunt ID with clue data upon completion of form
//
// export default class CreateClues extends React.Component {
//   render () {
//     return (
//       <div className={"row"}>
//         <div className={"row"}>
//           <h3> Create Your Clues! </h3>
//         </div>
//         <div className={"row"}>
//           <h5> Your Scavenger Hunt: (pull hunt name) </h5>
//         </div>
//         <div className={"col m10"}>
//           <form>
//             <div className={"row"}>
//               <label className={"col m6 labelsize"}> Clue #1
//                 <input type="text" name="clue01"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer01"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #2
//                 <input type="text" name="clue02"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer02"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #3
//                 <input type="text" name="clue03"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer03"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #4
//                 <input type="text" name="clue04"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer04"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #5
//                 <input type="text" name="clue05"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer05"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #6
//                 <input type="text" name="clue06"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer06"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #7
//                 <input type="text" name="clue07"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer07"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #8
//                 <input type="text" name="clue08"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer08"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #9
//                 <input type="text" name="clue09"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer09"/>
//               </label>
//             </div>
//             <div className={"row"}>
//               <label className={"col m6"}> Clue #10
//                 <input type="text" name="clue10"/>
//               </label>
//               <label className={"col m4 offset-m1"}> Answer
//                 <input type="text" name="answer10"/>
//               </label>
//             </div>
//           </form>
//
//         </div>
//       </div>
//     )
//   };
// }

import { default as React, Component } from "react";

import { GoogleMap, GoogleMapLoader } from "react-google-maps";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class CreateClues extends Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: "70vh",
              width: "100vw"
            }}
          />
        }
        googleMapElement={
          <GoogleMap
          ref={(map) => console.log(map)}
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
          />
        }
      />
    );
  }
}
