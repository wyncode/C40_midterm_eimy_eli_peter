import React from 'react';
//import axios from 'axios';
import '../App.css';
import Title from './Title';
import Description from './Description';
import Search from './Search';

const Home = () => {
  return (
    <div>
      <Title />
      <Description />
      <Search />
    </div>
  );
};

export default Home;
