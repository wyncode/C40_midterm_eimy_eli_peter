import React /*{ useState, useEffect }*/ from 'react';
import { AppContextProvider } from './context/AppContext';
//import ContextDemo from './components/ContextDemo';
import Home from './components/Home';

import './App.css';

const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        <Home />
      </div>
    </AppContextProvider>
  );
};

export default App;
