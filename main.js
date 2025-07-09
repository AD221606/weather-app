import { YOUR_API_KEY } from "./apiKey.js";

// const YOUR_API_KEY = YOUR_API_KEY;

let weatherToday;

async function getWeather(location, YOUR_API_KEY) {
    try {
        const responseWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${YOUR_API_KEY}`);
        const weatherData = await responseWeather.json();

        weatherToday = weatherData.currentConditions;
        console.log(weatherToday);
    }
    catch (err) {
        console.log(err);
    }
}

getWeather('Mumbai,India', YOUR_API_KEY);

