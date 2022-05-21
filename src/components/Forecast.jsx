import React from "react";
import styled from "styled-components";
import moment from "moment";

function Forecast({ data }) {
  const currentWeather = data.forecast.forecastday[0].hour;

  return (
    <StyledForecast>
      <h2>Today</h2>
      <div className="current-forecast box-shadow">
        {currentWeather.map((weather) => (
          <div key={weather.time_epoch} className="card box-shadow">
            <span>
              {moment(weather.time).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
            <img src={weather.condition.icon} alt="weather icon" />
            <p>{weather.temp_c}°C</p>
          </div>
        ))}
      </div>

      <h2>Future Forecast</h2>
      {data.forecast.forecastday.map((futureWeather) => (
        <div key={futureWeather.date_epoch} className="future-forecast">
          <div className="current-forecast box-shadow">
            {futureWeather.hour.map((weather) => (
              <div key={weather.time_epoch} className="card box-shadow">
                <span>
                  {moment(weather.time).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
                <img src={weather.condition.icon} alt="weather icon" />
                <p>{weather.temp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledForecast>
  );
}

const StyledForecast = styled.div`
  margin-top: 40px;
  h2 {
    margin: 20px 0;
  }

  .current-forecast {
    padding: 20px;
    display: flex;
    overflow-y: hidden;

    .card {
      min-width: 100px;
      padding: 10px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }

  .future-forecast {
    margin: 20px 0;
  }
`;
export default Forecast;
