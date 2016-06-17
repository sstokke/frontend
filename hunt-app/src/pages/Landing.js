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
                <div className="banner-centered valign-wrapper" id="banner-text">
                  <h1 className="banner valign">If you created your own adventure</h1>
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
        <div id="index-banner" className="parallax-container">
          <div className="parallax2">
            <div id="banner">
              <div className="wrap-center">
                <div className="banner-centered valign-wrapper" id="banner-text">
                  <h1 className="banner valign">Where would you go?</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
