import React from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("Toronto");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((city) => (
          <WeatherCard city={city} />
        ))}
      </div>
    </>
  );
}

export default App;
