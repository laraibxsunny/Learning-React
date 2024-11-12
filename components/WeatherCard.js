import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlycloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

function WeatherCard({ city }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src= {
            city.forecast === "Sunny" ? sunny :
            city.forecast === "Rainy" ? rainy :
            city.forecast === "Partly cloudy" ? partlycloudy :
            cloudy
          }
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}°</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;
