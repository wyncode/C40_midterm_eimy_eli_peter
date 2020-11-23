import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
// import API_KEY from '../../../env';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiData, setApiData] = useState([]);
  //const [error, setError] = useState(false);

  useEffect(() => {
    console.log('its working');
    axios
      .get(`/api/search`)
      .then((res) => {
        console.log(res);
        //setError(false);
        setApiData(res);
      })
      .catch((err) => {
        console.log(err);
        //setError(true)
      });
  }, [searchTerm]);

  return (
    <div>
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="searchbar"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <input type="submit" value="Go!"></input>
        </form>
      </div>
    </div>
  );
};

export default Search;
