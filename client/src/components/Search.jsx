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
      });
  };

  return (
    <div>
      <div class="container">
        <form class="form-inline" onSubmit={handleSubmit}>
          <input
            class="form-control form-control-lg"
            placeholder="Search City Name"
            type="text"
            id="searchbar"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <input
            id="sumbit_button"
            variant="primary"
            type="submit"
            class="btn btn-primary btn-lg"
            value="Go!"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Search;
