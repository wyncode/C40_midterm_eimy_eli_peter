import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function WeatherFetch() {
  const [feels_like, setFeelsLike] = useState('');
  const [mainTemp, setMainTemp] = useState('');
  const [description, setDescription] = useState('');
  const [main, setMain] = useState('');
  const [iconID, setIconID] = useState('');
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=16b2029b6edb7843d6cada674b311b30`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
      });
  }, []);
  return (
    <>
      <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h1>Feels like: {feels_like} Degrees Celsius</h1>
      {/* <h1>Weather Parameter: {main}</h1> */}
      <h1>Description : {description}</h1>
      <img src={'http://openweathermap.org/img/wn/' + iconID + '@2x.png'} />
    </>
  );
}
export default WeatherFetch;
