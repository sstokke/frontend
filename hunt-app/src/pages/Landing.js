import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import {Button, Icon, Row, Input, Col, Card} from 'react-materialize';

export default class Landing extends React.Component {
  render() {
    return (
          <div>
            <div id="index-banner" className="parallax-container">
              <div className="parallax">
                <div id="banner">
                  <div className="wrap-center">
                    <div className="banner-centered" id="banner-text">
                      <h1 className="banner">If you created your own adventure</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section cardcolor">
              <div className="row container">
                <p className="placeholder">Here we can put our Sign in/up</p>
              </div>
            </div>
            <div className="section cardcolor">
              <div className="row container">
                <p className="placeholder">Here at the Scavenger Hunt App we provide the tools needed to create your own adventure!
                  1 - Set up an account via email
                  2 - Pick a Scavenger Hunt Name
                  3 - Build your own clues, and set them to actual locations using our Google Maps API
                  4 - Invite friends!
                </p>
              </div>
            </div>
          </div>
        );
      }
}
