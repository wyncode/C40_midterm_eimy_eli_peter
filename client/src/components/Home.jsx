import React, { useState } from 'react';
import '../App.css';
import Title from './Title';
import Description from './Description';
import Search from './Search';
import WeatherCard from './WeatherCard';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  return (
    <div>
      <Title />
      {!apiData ? (
        <Description />
      ) : (
        <div style={{ margin: '1rem 0' }}>
          <WeatherCard apiData={apiData} />
        </div>
      )}

      <Search setApiData={setApiData} />
    </div>
  );
};

export default Home;
