import React, {Component} from "react";
import {Container} from "react-bootstrap";
import "../assets/scss/header.scss";
import {formatAMPM, unit} from "../helpers/utils";
import moment from "moment";
import WeatherIcon from "./WeatherIcon";
import {FiSearch} from "react-icons/all";

class Header extends Component {
  state = {
    time: 'time',
    date: 'date',
    day: 'day',
    city: ''
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
  }

  handleSearchByCity = () => {
    if (this.state.city !== '') {
      this.props.searchByCity(this.state.city);
      document.getElementById('searchForm').reset();
    } else {
      alert('Please insert a city')
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {time, date, day} = this.state;
    const {data} = this.props;

    return (
      <header className="header">
        <Container>
          <div className="header-widgets">
            <div className="main-widget">
              <p className="weather-icon"><WeatherIcon icon={data?.weather[0]?.icon}/></p>
              <p className="weather-temp">{data?.main?.temp} <sup>o</sup>
                <small>{unit === 'metric' ? 'Celsius' : 'fahrenheit'}</small></p>
              <p className="location">{data?.name}, {data?.sys?.country}</p>
              <p className="weather-condition">{data?.weather[0]?.main}</p>
            </div>

            <div className="meta-info">
              <div className="datetime">
                <span className="time">{time}</span>
                <span className="date">{day}, {date}</span>
                <div className="other-info">
                  <span className="info-title">Comfort Level</span>
                  <span className="info-item">Humidty: <strong>{data?.main?.humidity}%</strong></span>
                  <span className="info-item">Feels Like: <strong>{data?.main?.feels_like} <sup>o</sup></strong></span>
                </div>
                <div className="other-info">
                  <span className="info-title">Wind</span>
                  <span className="info-item">Direction: <strong>{data?.wind?.deg} <sup>o</sup></strong></span>
                  <span className="info-item">Speed: <strong>{data?.wind?.speed} km/h</strong></span>
                </div>
              </div>
              <form id="searchForm" className="search-location-form">
                <input type="search" name={"city"}
                       onChange={this.handleInputChange}
                       className="search-input" placeholder="Type your city..."/>
                <button type={"button"}
                        onClick={this.handleSearchByCity}
                        className="btn-search"><FiSearch/></button>
              </form>
            </div>
          </div>
        </Container>
      </header>
    )
  }

}

export default Header;
