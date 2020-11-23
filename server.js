if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
const searchWeatherAPI = async (request, response) => {};
app.get('/api/search', async (request, response) => {
  const { q } = request.query;
  console.log(q);
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=${process.env.API_KEY}`
    );
    console.log(data);
    response.json(data);
  } catch (err) {
    console.log(err);
  }
});
// END DEMO
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
