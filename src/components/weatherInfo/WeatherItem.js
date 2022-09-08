import React from "react";

const WeatherItem = ({ value, description, unit }) => {
  return (
    <div className="info-item">
      <p>
        {value} {unit}
      </p>
      <p>
        <strong>{description}</strong>
      </p>
    </div>
  );
};

export default WeatherItem;
