// Some basic express setup
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Used for making our API requests to OpenWeather
const axios = require("axios");

// Let's cache API calls so we don't send too many duplicative requests to OpenWeather
const apicache = require('apicache');
const cache = apicache.middleware;

// Using dotenv because committing API keys to a Github repository is a bad idea
require('dotenv').config();

app.listen(port, () => {});

// Make a call to OpenWeather's API to get the weather for a provided latitude & longitude (w/ provided units)
app.get('/weather/:latitude/:longitude/:units', [ cors(), cache('5 minutes') ], (req, res) => {
  console.log("--- asking for weather with", req.params);

  const WEATHER_KEY = process.env.WEATHER_API_KEY;
  const reqParams = req.params;
  const units = reqParams.units || 'imperial';
  const longitude =  reqParams.longitude;
  const latitude =  reqParams.latitude;
  const openWeatherMapUrl = `https://api.openweathermap.org/data/2.5/onecall?appid=${WEATHER_KEY}&lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=${units}`;

  console.log("--- GET", openWeatherMapUrl);

  axios.get(openWeatherMapUrl)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));
});
