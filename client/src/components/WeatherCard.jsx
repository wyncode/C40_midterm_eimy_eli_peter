import React from 'react';

function WeatherCard({ apiData }) {
  return (
    <>
      <h1 id="city">{apiData?.data?.name}</h1>
      <p id="weatherdata">Temperature : {apiData?.data?.main?.temp}. ℉</p>
      <p id="weatherdata">Feels like: {apiData?.data?.main?.feels_like} ℉</p>
      <p id="weatherdata">
        Description : {apiData?.data?.weather[0]?.description}
      </p>
    </>
  );
}

export default WeatherCard;
