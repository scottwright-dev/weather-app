import { fetchWeatherData } from "./api";
import { getSearchForm, getLocationQuery, updateUI } from "./ui";

function fetchAndProcessWeatherData(locationQuery) {
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
    fetchAndProcessWeatherData(locationQuery);
}

const searchForm = getSearchForm();
searchForm.addEventListener('submit', handleFormSubmit);
