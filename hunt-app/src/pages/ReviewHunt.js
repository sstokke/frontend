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

export default class ReviewHunt extends React.Component {
  constructor(props) {
    super(props);
    this.loadGeneralInfoFromServer();
  }
  loadGeneralInfoFromServer() {
    $.ajax({
      type: 'GET',
      url: '/api/hunts',
      dataType: 'jsonp',
      success: (data) => {
        console.log(data);
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadGeneralInfoFromServer();
  }

  render() {
    return (
      <div className="generalInfo">
        <h1>Your Hunt</h1>
        <input type="text" name="hunt_name" onChange={this.loadGeneralInfoFromServer}/>
      </div>
    )
  }
}
