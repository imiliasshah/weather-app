import React from "react";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy, WiDayHaze,
  WiDayRainWind,
  WiDayShowers,
  WiDaySnowThunderstorm,
  WiDaySunny, WiSnow
} from "react-icons/all";

const WeatherIcon = ({icon}) => {
  if (icon === '01d' || icon === '01n') {
    return <WiDaySunny/>
  } else if (icon === '02d' || icon === '02n') {
    return <WiDayCloudy/>
  } else if (icon === '03d' || icon === '03n') {
    return <WiCloud/>
  } else if (icon === '04d' || icon === '04n') {
    return <WiCloudy/>
  } else if (icon === '09d' || icon === '09n') {
    return <WiDayShowers/>
  } else if (icon === '10d' || icon === '10n') {
    return <WiDayRainWind/>
  } else if (icon === '11d' || icon === '11n') {
    return <WiDaySnowThunderstorm/>
  } else if (icon === '13d' || icon === '13n') {
    return <WiSnow/>
  } else if (icon === '50d' || icon === '50n') {
    return <WiDayHaze/>
  } else {
    return <WiDaySunny/>
  }
}

export default WeatherIcon
