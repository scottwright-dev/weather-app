import { fetchWeatherData } from "./api";
import { updateUI } from "./ui";

function processWeatherData(locationQuery) {
    fetchWeatherData(locationQuery)
        .then(weatherData => {
            updateUI(weatherData);  
        })
        .catch(error => {
            console.error(error);
        });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const locationQuery = document.querySelector('#location-query-input').value.trim();
    processWeatherData(locationQuery);
}

export function initialise() {
    const searchForm = document.querySelector('#location-query');
    searchForm.addEventListener('submit', handleFormSubmit);
}