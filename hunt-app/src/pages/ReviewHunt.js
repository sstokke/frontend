import React from 'react';
import DocumentTitle from 'react-document-title';
import { If, Then, Else } from 'react-if';
import {Button, Icon, Row, Input, Col, Card, CardTitle, Navbar} from 'react-materialize';
import { Link } from 'react-router';

export default class ReviewHunt extends React.Component {

  state = {
    data: [{}],
    page: "",
    name: "",
  };

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: '/api/hunts/',
      datatype: 'jsonp',
      success: data => {
        this.setState({data: data, page: 'hunts', name: data[0].hunt_name});
      }
    })
  };

  getGeneral (e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/hunts',
      datatype: 'jsonp',
      success: data => {
        this.setState({data: data, page: 'hunts', name: data[0].hunt_name});
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
        this.setState({data: data, page: 'clues', len: data.length-1});
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
        this.setState({data: data, page: 'invites', len: data.length-1});
      }
    })
  };

  render() {
    return (
      <Row>
        <div>
          <h2> Review Your Scavenger Hunt </h2>
        </div>
        <Card>
          <h5> Click Submit to send invites, or Edit to alter details </h5>
          <Col m={3} s={12}>
            <div className="review-card card-panel teal lighten-2 waves-effect waves-light btn-large center-align" onClick={this.getGeneral.bind(this)} >General Information</div>
          </Col>
          <Col m={3} s={12}>
            <div className="review-card card-panel teal lighten-2 waves-effect waves-light btn-large center-align" onClick={this.getClues.bind(this)}>Clues and Locations</div>
          </Col>
          <Col m={3} s={12}>
            <div className="review-card card-panel teal lighten-2 waves-effect waves-light btn-large center-align" onClick={this.getInvites.bind(this)}>Invites</div>
          </Col>
          <Col m={3} s={12}>
            <Link to="/profile">
            <div className="review-card card-panel teal lighten-2 waves-effect waves-light btn-large center-align">Confirm Hunt</div>
          </Link>
          </Col>
          <Col m={8} s={12}>
            <If condition={ this.state.page === 'hunts' }>
              <Then>
                <Card className='large'
                  header={<CardTitle image='/css/party2.jpeg'>{this.state.data[0].hunt_name}</CardTitle>}
                  actions={[<a href='#'>Edit General Info</a>]}>
                  <div>Date: {this.state.data[0].date} </div>
                  <div>Starting Time: {this.state.data[0].start_time} </div>
                  <div>Ending Time: {this.state.data[0].end_time} </div>
                  <div>General Location: {this.state.data[0].location} </div>
                  <div>Description: {this.state.data[0].description} </div>
                </Card>
              </Then>
            </If>
            <If condition={ this.state.page === 'clues' }>
              <Then>
                <Card className='large'
                  header={<CardTitle image='/css/yourmap.png'>{this.state.name}</CardTitle>}
                  actions={[<a href='#'>Edit Clues and Locations</a>]}>
                  <Row>
                  <Col m={6}>
                  <div>"Clue: This bar used to be a luxury hotel, way back in the early 1900s!"</div>
                  <div>"Answer: The Diller Room"</div>
                  <hr/>
                  <div>"Clue: Kissing the ____ stone of _____ castle gives you the “gift of gab”, and the name of the next pub!"</div>
                  <div>"Answer: Blarney Stone Pub"</div>
                  <hr/>
                  <div>"A fancy word for “heavenly” will lead you to this brewing company’s bar!"</div>
                  <div>"Answer: Elysian Bar"</div>
                  </Col>
                  <Col m={6}>
                  <div>"Clue: Tucked away in an alley, you’ll find this pub next to a Tea Room. How British."</div>
                  <div>"Answer: White Horse Trading Co."</div>
                  <hr/>
                  <div>"Clue: Cowboys of the Wild West would feel right at home at this bar (NOT Cowgirls, Inc. No one feels at home there. Except Kyle.)"</div>
                  <div>"Answer: The Whisky Bar"</div>
                  </Col>
                  </Row>
                </Card>
              </Then>
            </If>
            <If condition={ this.state.page === 'invites' }>
              <Then>
                <Card className='large'
                  header={<CardTitle image='/css/ladies.jpeg'>{this.state.name}</CardTitle>}
                  actions={[<a href='#'>Edit Invites</a>]}>
                  <div>Date: {this.state.data[0].date} </div>
                  <div>Starting Time: {this.state.data[0].start_time} </div>
                  <div>Ending Time: {this.state.data[0].end_time} </div>
                  <div>General Location: {this.state.data[0].location} </div>
                  <div>Description: {this.state.data[0].description} </div>
                </Card>
              </Then>
            </If>
          </Col>
        </Card>
      </Row>
    );
  }
}
