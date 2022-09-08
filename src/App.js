import { CircularProgress } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import CityForm from "./components/cityForm/CityForm";
import Header from "./components/header/Header";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

import "./App.css";

const API_URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "35daf224959660eff9e7e52fc803ee5d";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const searchHandler = (city) => {
    setNotFound(false);
    setIsLoading(true);
    searchWeather(city);
  };

  const searchWeather = async (city) => {
    try {
      const { data: response } = await axios.get(API_URL_WEATHER, {
        params: { q: city, appid: API_KEY },
      });

      setData(response);
      setIsLoading(false);
    } catch (err) {
      setNotFound(true);
      setData(null);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <CityForm onSearch={searchHandler} isLoading={isLoading} />
      {data && !isLoading && <WeatherInfo data={data} />}
      {isLoading && <CircularProgress />}
      {notFound && <h3>Ciudad no encontrada</h3>}
    </div>
  );
}

export default App;
