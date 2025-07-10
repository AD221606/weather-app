import { YOUR_API_KEY } from "./apiKey.js";
import { convertToC } from "./converters.js";
import { updateLocation, updateRealFeel, updateTodayTemp } from "./updatefunc.js";


let weatherDataToday;
let allWeatherData;

async function getWeather(location, YOUR_API_KEY) {
    try {
        const responseWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${YOUR_API_KEY}`);
        if (!responseWeather.ok) {
            //Make an error block below input and add error styling
        }

        const weatherData = await responseWeather.json();

        allWeatherData = weatherData;
        let { currentConditions: today } = weatherData;
        weatherDataToday = today;
    }
    catch (err) {
        console.log(err);
    }
}

//listen to button click/ enter after entering loation
const weatherBtn = document.getElementById('get-weather-btn');
weatherBtn.addEventListener('click', () => {
    // get what's inside input
    location = document.getElementById('location-input').value;
    getWeather(location, YOUR_API_KEY).then(() => {

        let temp = weatherDataToday.temp;
        temp = convertToC(temp);
        updateTodayTemp(temp);

        let location = allWeatherData.resolvedAddress;
        updateLocation(location);

        let realFeelTemp = weatherDataToday.feelslike;
        realFeelTemp = convertToC(realFeelTemp);
        updateRealFeel(realFeelTemp);
    });
});










