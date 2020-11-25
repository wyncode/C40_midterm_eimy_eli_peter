import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Home from './components/Home';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <Home />
      </div>
    </AppContextProvider>
  );
};

export default App;
