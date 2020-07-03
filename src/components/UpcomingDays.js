import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import DayCondition from "./DayCondition";
import "../assets/scss/upcoming-days.scss";

class UpcomingDays extends Component {
  render() {
    return (
      <div className="upcoming-days">
        <Container>
          <div className="day-list">
            <div className="day-item">
              <DayCondition data={{label: 'Today', maxTemp: 15, minTemp: 10, weatherCondition: 'Clear Sky'}}
                            isActive={true}/>
            </div>
            <div className="day-item">
              <DayCondition data={{label: 'Today', maxTemp: 15, minTemp: 10, weatherCondition: 'Clear Sky'}}
                            isActive={false}/>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default UpcomingDays;
