This is a simple Node.js project using Express to make an API call to an OpenWeather endpoint without exposing a secret API key to the front-end code that uses it. The exposed endpoint for the location you'd like to get current and daily weather conditions for is:

```
GET /weather/<latitude>/<longitude>/<units ("imperial" or "metric")>
```

The result will look like this:

```
{
    "lat": 39.9499,
    "lon": -75.1512,
    "timezone": "America/New_York",
    "timezone_offset": -14400,
    "current": {
        "dt": 1721920946,
        "sunrise": 1721901185,
        "sunset": 1721953253,
        "temp": 79.48,
        "feels_like": 79.48,
        "pressure": 1018,
        "humidity": 77,
        "dew_point": 71.64,
        "uvi": 5.12,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.75,
        "wind_deg": 280,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ]
    },
    "daily": [
        {
            "dt": 1721926800,
            "sunrise": 1721901185,
            "sunset": 1721953253,
            "moonrise": 1721962920,
            "moonset": 1721918580,
            "moon_phase": 0.66,
            "temp": {
                "day": 79.45,
                "min": 72.12,
                "max": 83.52,
                "night": 74.44,
                "eve": 81.1,
                "morn": 74.55
            },
            "feels_like": {
                "day": 79.45,
                "night": 74.88,
                "eve": 82.62,
                "morn": 75.76
            },
            "pressure": 1018,
            "humidity": 73,
            "dew_point": 70.03,
            "wind_speed": 9.22,
            "wind_deg": 279,
            "wind_gust": 17.29,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 1.09,
            "uvi": 5.12
        },
        ...
    ]
}
```

---

## To run
- Clone this repository
- Create the `.env` file as described below
- Run `npm start`

## ⚠️ Warning!

This project uses an API key that has not been pushed to this repository for security purposes. You would need to create an API with OpenWeather at https://openweathermap.org/api. Once that key is made, copy the `.env.sample` file to `.env` file in the root directory and replace `XXXXXXXXXXXXXXXXX` with your key, like so:

```
WEATHER_API_KEY=<your API key here>
```
