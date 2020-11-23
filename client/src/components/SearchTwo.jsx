import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const SearchTwo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);

  const searchOurWeatherAPI = async () => {
    try {
      //console.log(searchTerm);
      const response = await axios.get(`/api/search`);
      setResult(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};
