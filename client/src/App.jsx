import React /*{ useState, useEffect }*/ from 'react';
import { AppContextProvider } from './context/AppContext';
//import ContextDemo from './components/ContextDemo';
import Home from './components/Home';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <div id="demo">
        <Home />
      </div>
    </AppContextProvider>
  );
};

export default App;
