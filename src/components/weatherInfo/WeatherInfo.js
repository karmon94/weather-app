import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import NearMeIcon from "@mui/icons-material/NearMe";
import WeatherItem from "./WeatherItem";
import "./WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  const imgCode = data?.weather[0].icon;
  const description = data?.weather[0].description.toUpperCase();
  const temp = (data?.main.temp - 273.15).toFixed(1);
  const feels = (data?.main.feels_like - 273.15).toFixed(1);
  const maxTemp = (data?.main.temp_max - 273.15).toFixed(1);
  const minTemp = (data?.main.temp_min - 273.15).toFixed(1);
  const pressure = data?.main.pressure;
  const humidity = data?.main.humidity;
  const speed = data?.wind.speed;

  return (
    <div className="card">
      <div className="header">
        <div>
          <h2>{data.name}</h2>
          <h4>{data.sys.country}</h4>
        </div>

        <div>
          <p className="small-text">Longitude: {data.coord.lon}</p>
          <p className="small-text">Latitude: {data.coord.lat}</p>
        </div>
      </div>
      <div className="content">
        <div className="icon-description">
          <img
            src={`http://openweathermap.org/img/wn/${imgCode}@2x.png`}
            alt="weather icon"
          ></img>
          <h5>{description}</h5>
        </div>
        <div className="row">
          <ThermostatIcon />
          <WeatherItem value={temp} description="Temp" unit="°C" />
          <WeatherItem value={feels} description="Feels" unit="°C" />
          <WeatherItem value={maxTemp} description="Max" unit="°C" />
          <WeatherItem value={minTemp} description="Min" unit="°C" />
        </div>
        <div className="row">
          <div>
            <OpacityIcon />
            <WeatherItem value={humidity} unit="%" description="" />
          </div>

          <div>
            <WeatherItem value={pressure} unit="mB" description="Pressure" />
          </div>

          <div>
            <NearMeIcon />
            <WeatherItem value={speed} unit="km/H" description="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
