import React from "react";

const Weather = ({weather, city}) => { 
  return(
  <div>
          <h3>Current {city} Weather:</h3>
          <p>
            {weather.condition.text}
          </p>
          <img src={weather.condition.icon} alt="weather icon"/>
          <p>
            temp: {weather.temp_f} F / {weather.temp_c} C
          </p>
          <p>
            feels like: {weather.feelslike_f} F / {weather.feelslike_c} C
          </p>
          <p>
            wind: {weather.wind_mph}mph / {weather.wind_kph}kph {weather.wind_dir}
          </p>

        </div>
  )
}

export default Weather;