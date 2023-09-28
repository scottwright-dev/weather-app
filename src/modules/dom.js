import { fetchWeatherData } from "./api";

const searchForm = document.querySelector('#location-query');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const locationQuery = document.querySelector('#location-query-input').value;
    fetchWeatherData(locationQuery.trim())
    .then(data => {
        console.log(`The current temperature in ${data.location.name} is ${data.current.temp_c} degrees, and the outlook is ${data.current.condition.text}. 
        
        The forecast for the next 3 days is:
         
        ${data.forecast.forecastday[0].date} will be ${data.forecast.forecastday[0].day.condition.text} 
        ${data.forecast.forecastday[1].date} will be ${data.forecast.forecastday[1].day.condition.text} 
        ${data.forecast.forecastday[2].date} will be ${data.forecast.forecastday[2].day.condition.text} 
        `);
    })
    .catch(error => {
        console.error("Error:", error);
    });
})