import React, { useState } from 'react';
//import axios from 'axios';
import '../App.css';
import Title from './Title';
import Description from './Description';
import Search from './Search';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  return (
    <div>
      <Title />
      {!apiData && <Description />}

      <Search setApiData={setApiData} />
    </div>
  );
};

export default Home;
