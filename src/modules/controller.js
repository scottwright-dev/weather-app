import { fetchWeatherData } from "./api";
import { getSearchForm, getLocationQuery, updateUI } from "./ui";

function processWeatherData(locationQuery) {
    fetchWeatherData(locationQuery)
        .then(data => {
            updateUI(data);  
        })
        .catch(error => {
            console.error(error);
        });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const locationQuery = getLocationQuery();
    processWeatherData(locationQuery);
}

export function initialise() {
    const searchForm = getSearchForm();
    searchForm.addEventListener('submit', handleFormSubmit);
}

