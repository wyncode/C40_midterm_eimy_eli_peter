import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const Search = ({ setApiData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/search?search=${searchTerm}`)
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          setError(res.data.error);
          setApiData(null);
        } else {
          setApiData(res);
          setError(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="container">
        {error && 'City not found.'}
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
