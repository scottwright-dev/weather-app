import { fetchWeatherData } from "./api";
import { updateCurrentWeatherUI, displayErrorMessage } from "./ui";

function processWeatherData(locationQuery) {
    fetchWeatherData(locationQuery)
        .then(weatherData => {
            if (weatherData.error) {
                displayErrorMessage(weatherData.error)
            }
            updateCurrentWeatherUI(weatherData);  
        })
        .catch(error => {
            displayErrorMessage(error.message)
        });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const locationQueryInput = document.querySelector('#location-query-input');
    const locationQuery = locationQueryInput.value.trim();
    processWeatherData(locationQuery);
    
    // Clear search input & any error msg display
    locationQueryInput.value = "";
    displayErrorMessage("");
}

export function initialise() {
    const searchForm = document.querySelector('#location-query');
    searchForm.addEventListener('submit', handleFormSubmit);
}