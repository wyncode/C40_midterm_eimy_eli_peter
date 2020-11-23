if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

app.get('/api/search', async (request, response) => {
  const { search } = request.query;
  try {
    if (search) {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY}`
      );
      response.json(data);
    } else {
      res.json({ message: 'nothing to see here.' });
    }
  } catch (err) {
    console.log(err);
  }
});
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
