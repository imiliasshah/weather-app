import React from "react";
import {Container} from "react-bootstrap";
import "../assets/scss/header.scss";
import {WiDayLightning} from "react-icons/all";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-widgets">
          <div className="main-widget">
            <p className="weather-icon"><WiDayLightning/></p>
            <p className="weather-temp">39 <sup>o</sup> <small>Celsius</small></p>
            <p className="location">Dhaka, BD</p>
            <p className="weather-condition">Clear Sky</p>
            {/*<p className="date">11 July, 2020</p>*/}
          </div>


          <div className="meta-info">
            <div className="datetime">
              <span className="time">10:30 pm</span>
              <span className="date">Monday, 18 June 2020</span>
              <div className="other-info">
                <span className="info-title">Comfort Level</span>
                <span className="info-item">Humidty: <strong>97%</strong></span>
                <span className="info-item">Feels Like: <strong>34 <sup>o</sup></strong></span>
              </div>
              <div className="other-info">
                <span className="info-title">Wind</span>
                <span className="info-item">Direction: <strong>Southwest</strong></span>
                <span className="info-item">Speed: <strong>12-28 km/h</strong></span>
              </div>
            </div>
            <div className="search-location-form">
              <input type="search" className="search-input" placeholder="Type city..."/>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;
