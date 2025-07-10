import { YOUR_API_KEY } from "./apiKey.js";


let weatherToday;

async function getWeather(location, YOUR_API_KEY) {
    try {
        const responseWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${YOUR_API_KEY}`);

        if (!responseWeather.ok) {
            //Make an error block below input and add error styling
        }

        const weatherData = await responseWeather.json();


        weatherToday = weatherData.currentConditions;
        console.log(weatherToday);
    }
    catch (err) {
        console.log(err);
    }
}



//Reading what location
let location;
//listen to button click/ enter after entering loation
const weatherBtn = document.getElementById('get-weather-btn');
weatherBtn.addEventListener('click', () => {
    // get what's inside input
    location = document.getElementById('location-input').value;
    getWeather(location, YOUR_API_KEY);
});


//Display the temperature


// 







