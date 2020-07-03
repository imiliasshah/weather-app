import React from "react";
import {WiDayLightning} from "react-icons/all";
import "../assets/scss/day-condition.scss";

const DayCondition = ({data, isActive}) => {
  return (
    <div className={isActive ? 'day-condition active' : 'day-condition'}>
      <div className="day">{data.label}</div>
      <div className="weather-icon"><WiDayLightning/></div>
      <div className="temp">
        <span className="max-temp">{data.maxTemp} <sup>o</sup></span>
        <span className="min-temp">{data.minTemp} <sup>o</sup></span>
      </div>
      <div className="weather-condition">{data.weatherCondition}</div>
    </div>
  )
}

export default DayCondition;
