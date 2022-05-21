import React from "react";
import styled from "styled-components";

function CurrentWeather(props) {
  const { condition, temp_c, wind_kph } = props.data.current;
  const { name, country, localtime } = props.data.location;
  return (
    <StyledCurrentWeather>
      <div className="current-weather box-shadow">
        <img src={condition.icon} alt="icon" />
        <h1>{temp_c}°C</h1>

        <div className="content">
          <h5>{condition.text}</h5>
          <h5>Wind: {wind_kph} kpH</h5>
        </div>
      </div>
      <div className="location box-shadow">
        <h2>{country}</h2>
        <h3>{name}</h3>
        <h4>{localtime}</h4>
      </div>
    </StyledCurrentWeather>
  );
}

const StyledCurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;

  .current-weather {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    padding: 20px;

    img {
      width: 80px;
      height: 80px;
    }

    h1 {
      font-size: 3rem;
    }

    .content {
      padding: 20px;
      h5 {
        font-weight: normal;
      }
    }
  }

  .location {
    width: 350px;
    padding: 20px;

    h2 {
      text-align: right;
      font-size: 1rem;
      margin-bottom: 10px;
    }

    h3 {
      text-align: right;
      font-size: 0.8rem;
      margin-bottom: 10px;
    }
    h4 {
      text-align: right;
      font-size: 0.8rem;
      margin-bottom: 10px;
      font-weight: 500;
    }
  }
`;

export default CurrentWeather;
