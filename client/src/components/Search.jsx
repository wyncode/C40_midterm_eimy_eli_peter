import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const Search = ({ setApiData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/search?search=${searchTerm}`)
      .then((res) => {
        setApiData(res);
      })
      .catch((err) => {
        console.log(err);
        //setError(true)
      });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="searchbar"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <input
            id="sumbit_button"
            variant="primary"
            type="submit"
            value="Go!"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Search;
