import React, {Component} from "react";
import {Container} from "react-bootstrap";
import "../assets/scss/header.scss";
import {WiDayLightning} from "react-icons/all";
import {getCurrentWeather} from "../services/weatherServices";
import {formatAMPM, unit} from "../helpers/utils";
import moment from "moment";

class Header extends Component {
  state = {
    currentWeather: null,
    time: 'time',
    date: 'date',
    day: 'day'
  }

  componentDidMount() {
    const date = new Date();
    setInterval(() => {
      this.setState({
        time: formatAMPM(date),
        date: moment(date).format('LL'),
        day: moment(date).format('dddd')
      })
    }, 1000);

    console.log('55')

    getCurrentWeather('Bangladesh')
      .then(res => {
        this.setState({currentWeather: res})
      })
      .catch(errMsg => {
        console.log(errMsg)
      })
  }

  render() {
    const {currentWeather, time, date, day} = this.state;

    return (
      <header className="header">
        <Container>
          <div className="header-widgets">
            <div className="main-widget">
              <p className="weather-icon"><WiDayLightning/></p>
              <p className="weather-temp">{currentWeather?.main?.temp} <sup>o</sup>
                <small>{unit === 'metric' ? 'Celsius' : 'fahrenheit'}</small></p>
              <p className="location">{currentWeather?.name}, {currentWeather?.sys?.country}</p>
              <p className="weather-condition">{currentWeather?.weather[0]?.main}</p>
              {/*<p className="date">11 July, 2020</p>*/}
            </div>


            <div className="meta-info">
              <div className="datetime">
                <span className="time">{time}</span>
                <span className="date">{day}, {date}</span>
                <div className="other-info">
                  <span className="info-title">Comfort Level</span>
                  <span className="info-item">Humidty: <strong>{currentWeather?.main?.humidity}%</strong></span>
                  <span className="info-item">Feels Like: <strong>{currentWeather?.main?.feels_like} <sup>o</sup></strong></span>
                </div>
                <div className="other-info">
                  <span className="info-title">Wind</span>
                  <span className="info-item">Direction: <strong>{currentWeather?.wind?.deg} <sup>o</sup></strong></span>
                  <span className="info-item">Speed: <strong>{currentWeather?.wind?.speed} km/h</strong></span>
                </div>
              </div>
              <div className="search-location-form">
                <input type="search" className="search-input" placeholder="Type your city..."/>
              </div>
            </div>
          </div>
        </Container>
      </header>
    )
  }

}

export default Header;
