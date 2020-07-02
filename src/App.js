import React from "react";
import bodyBg from "./assets/img/body-bg.jpg";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import {WiDayLightning} from "react-icons/all";

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${bodyBg})`}}>
      <Header/>

      <div className="upcoming-days">
        <Container>
          <div className="day-list">
            <div className="day-item">
              <div className="day-condition active">
                <div className="day">Today</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Clear Sky</div>
              </div>
            </div>

            <div className="day-item">
              <div className="day-condition">
                <div className="day">Sun</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Cloudy</div>
              </div>
            </div>

            <div className="day-item">
              <div className="day-condition">
                <div className="day">Mon</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Cloudy</div>
              </div>
            </div>

            <div className="day-item">
              <div className="day-condition">
                <div className="day">Tue</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Cloudy</div>
              </div>
            </div>

            <div className="day-item">
              <div className="day-condition">
                <div className="day">Wed</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Cloudy</div>
              </div>
            </div>

            <div className="day-item">
              <div className="day-condition">
                <div className="day">Thu</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Cloudy</div>
              </div>
            </div>

            <div className="day-item">
              <div className="day-condition">
                <div className="day">Fri</div>
                <div className="weather-icon"><WiDayLightning/></div>
                <div className="temp"><span>18 <sup>o</sup></span>/ <span>12 <sup>o</sup></span></div>
                <div className="weather-condition">Cloudy</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
