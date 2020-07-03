import React from "react";
import bodyBg from "./assets/img/body-bg.jpg";
import Header from "./components/Header";
import UpcomingDays from "./components/UpcomingDays";

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${bodyBg})`}}>
      <Header/>

      <UpcomingDays/>
    </div>
  );
}

export default App;
