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
    const locationQueryInput = document.querySelector('#location-query-input');
    const locationQuery = locationQueryInput.value.trim();
    processWeatherData(locationQuery);
    
    // Clear the search input field after data retrieved
    locationQueryInput.value = "";
}

export function initialise() {
    const searchForm = document.querySelector('#location-query');
    searchForm.addEventListener('submit', handleFormSubmit);
}