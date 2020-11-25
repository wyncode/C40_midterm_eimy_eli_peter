# C40 Midterm Group 2 - Weather the Fashion

_**Weather the Fashion**_ is an app that will give you an outfit recommendation based on the weather of a searched City.

## Status

The project is currently done from a functional standpoint. Though more additional features could be added for a more robust application.

## Screenshots

<img src="./screenshots/landing-page.png"
     alt="landing page screenshot"
     style="float: left; margin-right: 10px;" />

<img src="./screenshots/weather-fetcher.png"
     alt="landing page screenshot"
     style="float: left; margin-right: 10px;" />

## Setup

- `git` clone into it
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `yarn add axios`
- `yarn add react-bootstrap bootstrap`

## Who

We are Peter, Eli and Eimy. Wyncode students, developers looking forward to better the world with our ideas and new learned skills.

## How

The idea was to have a fully functional app that would suggest what would be more appropriate to wear depending on the weather of the city searched. We have made use of the CSS, JS, HTML, React, DOM manupulation etc. All the skills we have managed to learn. No specific versions of other software is required to run this app.

## Install

No install or special configuration is necessary for this project to run other than internet connection for this web based application, and a phone or computer to access it.

## API Information

-We have made use of the Open Weather Map which can be located here (api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}).
-After making our account with the client we generated our key to use within our app deciding on which data to pull from a variety of choices they had available. (https://openweathermap.org/api)
-They provided us with the kelvin units which we had to convert into farengheights. This was done by adding the `&units=imperial` in the URL of the call to get our API.

## How It Works

- The end-user will open up the web-application and land on its landing page which will present a title question of "What should you wear today?
- The end-user will then type in the City Name of their choosing into the search from
- After inputting in the city and either hitting `enter` or the "Go!" button the app fetches data from the API we mentioned above.
- This API feeds us a couple different data points from a selected city for that day (i.e temperature, description, humidity etc.)
- This response data is then sent through two functional components
- The first functional component ("./WeatherCard.jsx") which will output and render the specific data points we want (City Name, Main Temperature, Feels Like Temperature and Description)
- The second functional component ("./Outfit.jsx") receives the response data, specifically targeting the 'Main' weather description, outputting a recommendation based on conditional logic in a switch statement.
- The outputs of both the first and second component are then rendered on the same page
- The user can search for a new City at any time and the information will be updated.

## Enjoy and hope you are prepared for today's weather!
