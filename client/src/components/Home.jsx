import React, { useState } from 'react';
//import axios from 'axios';
import '../App.css';
import Title from './Title';
import Description from './Description';
import Search from './Search';
import WeatherCard from './WeatherCard';
import Outfit from './Outfit';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  return (
    <div>
      <Title />
      {!apiData ? (
        <Description />
      ) : (
        <>
          <WeatherCard apiData={apiData} />
          <Outfit apiData={apiData} />
        </>
      )}
      <Search setApiData={setApiData} />
    </div>
  );
};

export default Home;
