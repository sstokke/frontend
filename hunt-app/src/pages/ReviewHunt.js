import React from 'react';
import DocumentTitle from 'react-document-title';

// class Detail extends React.Component {
//   render() {
//     return (
//       <div className="huntName">
//         <h2 className="huntDate">
//           {this.props.hunt_name}
//         </h2>
//       </div>
//     )
//   }
// }
//
// return(
//   <div>
//   {this.state.data[0].hunt_name}
//   <input type="text" name="hunt_name" onChange={this.getHunts.bind(this)}/>
//   </div>


export default class ReviewHunt extends React.Component {

  state = {
    data: [{}]
  };

  getGeneral (e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/hunts',
      datatype: 'jsonp',
      success: data => {
        this.setState({data: data});
        console.log(data);
      }
    })
  };
  getClues (e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/clues',
      datatype: 'jsonp',
      success: data => {
        this.setState({data: data});
        console.log(data);
      }
    })
  };
  getInvites (e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/invites',
      datatype: 'jsonp',
      success: data => {
        this.setState({data: data});
        console.log(data);
      }
    })
  };
  render() {
    return (
      <div className="content">
      <nav>
        <div className="nav-wrapper">
          <p className="brand-logo center">Review Your Hunt</p>
        </div>
      </nav>
        <div className="row">
          <div className="col s12 m4 l3">
          <nav>
            <div className="nav-wrapper">
              <p className="brand-logo center">Hunt Details</p>
            </div>
          </nav>
            <div className="card-panel teal lighten-2 waves-effect waves-light btn-large center-align" onClick={this.getGeneral.bind(this)} >General Information</div>
            <div className="card-panel teal lighten-2 waves-effect waves-light btn-large center-align" onClick={this.getClues.bind(this)}>Clues and Locations</div>
            <div className="card-panel teal lighten-2 waves-effect waves-light btn-large center-align" onClick={this.getInvites.bind(this)}>Invites</div>
          </div>
          <div className="col s12 m4 l9">
            <p className="flat-text-header center-align">
            </p>
            <p className="flat-text center-align">
            </p>
            <p className="flat-text center-align">
            </p>
            <p className="flat-text center-align">
            </p>
          </div>
        </div>
      </div>
    );
  }
}
