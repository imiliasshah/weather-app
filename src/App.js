import React, {useEffect} from "react";
import bodyBg from "./assets/img/body-bg.jpg";
import Header from "./components/Header";
import UpcomingDays from "./components/UpcomingDays";
import {getGeoLocation} from "./services/weatherServices";
import moment from "moment";

function App() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Hello: ', position.coords.latitude);
        getGeoLocation(position.coords.latitude, position.coords.longitude)
          .then(res => {
            const result = res.compound_code.substr(res.compound_code.indexOf(" ") + 1);
            console.log(moment(1593777600).format('LLLL'));
          })
      })
    }
  },[])
  return (
    <div className="app" style={{backgroundImage: `url(${bodyBg})`}}>
      <Header/>
      <UpcomingDays/>
    </div>
  );
}

export default App;
