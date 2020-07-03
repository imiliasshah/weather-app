import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import DayCondition from "./DayCondition";
import "../assets/scss/upcoming-days.scss";
import {timeStampToFormatDate} from "../helpers/utils";

class UpcomingDays extends Component {
  render() {
    const {data} = this.props;

    return (
      <div className="upcoming-days">
        <Container>
          <div className="day-list">
            {data.map((day, index) => {
              if (index % 8 === 0) {
                return (
                  <div key={index} className="day-item">
                    <DayCondition data={{
                      day: timeStampToFormatDate(day.dt, 'll') === timeStampToFormatDate(new Date().getTime()/1000, 'll') ? 'Today' : timeStampToFormatDate(day.dt, 'll'),
                      temp: day.main.temp,
                      weatherCondition: day.weather[0].main
                    }} isActive={index === 0}/>
                  </div>
                )
              }
              return null
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default UpcomingDays;
