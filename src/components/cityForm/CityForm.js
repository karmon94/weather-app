import { Button } from "@mui/material";
import { useState } from "react";

import "./CityForm.css";

const CityForm = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    setCity(e.target.value);
    setError(false);
  };

  const searchCityHandler = (e) => {
    e.preventDefault();

    if (city) {
      onSearch(city);
    } else {
      setError(true);
    }
  };

  return (
    <form className="formLayout">
      <label htmlFor="cityName">Ingrese la ciudad</label>
      <input
        className={"searchInput " + (error ? "inputError" : "")}
        id="cityName"
        name="cityName"
        type="text"
        value={city}
        onChange={inputHandler}
        disabled={isLoading}
      />
      <Button variant="contained" onClick={searchCityHandler}>
        Buscar
      </Button>
    </form>
  );
};

export default CityForm;
