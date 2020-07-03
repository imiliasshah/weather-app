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
            {data.map((day, index) => (
              <div key={index} className="day-item">
                <DayCondition data={{
                  day: timeStampToFormatDate(day[0].dt, 'll') === timeStampToFormatDate(new Date().getTime() / 1000, 'll') ? 'Today' : timeStampToFormatDate(day[0].dt, 'll'),
                  temp: day[0].main.temp,
                  weatherCondition: day[0].weather[0].main,
                  icon: day[0].weather[0].icon
                }} isActive={index === 0}/>
              </div>))}
          </div>
        </Container>
      </div>
    );
  }
}

export default UpcomingDays;
