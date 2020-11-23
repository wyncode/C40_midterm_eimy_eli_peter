import React, { useState, useEffect, Component } from 'react';
import WeatherFetch from './weatherFetch.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherFetch />
    </div>
  );
}

export default App;
