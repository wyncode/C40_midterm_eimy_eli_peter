import React, { useState } from 'react';
//import axios from 'axios';
import '../App.css';
import Title from './Title';
import Description from './Description';
import Search from './Search';
import WeatherCard from './WeatherCard';
import Outfit from './Outfit';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  return (
    <div className="home">
      <Title />
      {!apiData ? (
        <Description />
      ) : (
        <>
          <Card className="weather bg-transparent border-transparent border-0">
            <WeatherCard apiData={apiData} />

            <Outfit apiData={apiData} />
          </Card>
        </>
      )}
      <Search setApiData={setApiData} />
    </div>
  );
};

export default Home;
