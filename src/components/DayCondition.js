import React from "react";
import "../assets/scss/day-condition.scss";
import WeatherIcon from "./WeatherIcon";

const DayCondition = ({data, isActive}) => {
  return (
    <div className={isActive ? 'day-condition active' : 'day-condition'}>
      <div className="day">{data.day}</div>
      <div className="weather-icon"><WeatherIcon icon={data.icon}/></div>
      <div className="temp">
        <span className="max-temp">{data.temp} <sup>o</sup></span>
      </div>
      <div className="weather-condition">{data.weatherCondition}</div>
    </div>
  )
}

export default DayCondition;
