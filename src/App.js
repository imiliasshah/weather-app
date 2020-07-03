import React, {Component} from "react";
import bodyBg from "./assets/img/body-bg.jpg";
import Header from "./components/Header";
import UpcomingDays from "./components/UpcomingDays";
import {getBulkWeatherForecast, getCurrentWeather} from "./services/weatherServices";
import {arrayToGroupArray} from "./helpers/utils";

class App extends Component {
  state = {
    currentWeather: null,
    bulkForecast: []
  }

  componentDidMount() {
    getCurrentWeather('dhaka')
      .then(res => {
        this.setState({currentWeather: res})
      })
      .catch(errMsg => {
        console.log(errMsg)
      })

    getBulkWeatherForecast('dhaka')
      .then(res => {
        this.setState({bulkForecast: arrayToGroupArray(res.list, 8)})
      })
      .catch(errMsg => {
        console.log(errMsg);
      })
  }

  handleSearchByCity = (city) => {
    getCurrentWeather(city)
      .then(res => {
        this.setState({currentWeather: res})
      })
      .catch(errMsg => {
        console.log(errMsg)
      })

    // Bulk Weather Forecast
    getBulkWeatherForecast(city)
      .then(res => {
        this.setState({bulkForecast: arrayToGroupArray(res.list, 8)})
      })
      .catch(errMsg => {
        console.log(errMsg);
      })
  }

  render() {
    const {currentWeather, bulkForecast} = this.state;

    return (
      <div className="app" style={{backgroundImage: `url(${bodyBg})`}}>
        <Header searchByCity={this.handleSearchByCity} data={currentWeather}/>

        {bulkForecast.length > 0 &&
        <UpcomingDays data={bulkForecast}/>
        }
      </div>
    );
  }
}

export default App;
