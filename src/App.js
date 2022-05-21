import { useState } from "react";
import "./App.css";
// tools
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Search from "./components/Search";
import useRequest from "./hooks/useRequest";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App() {
  const [searchResult, setSearchResult] = useState("Tbilisi");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchResult}&days=3&aqi=no&alerts=no`;

  const { data } = useRequest(url);
  const dataLengt = Object.keys(data).length;
  console.log(data);
  return (
    <div className="App">
      <ToastContainer />
      <h2 className="app-title">Weather App</h2>

      {dataLengt !== 0 && (
        <div>
          <Search result={setSearchResult} />
          <CurrentWeather data={data} />
          <Forecast data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
