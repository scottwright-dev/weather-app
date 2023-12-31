import { fetchWeatherData } from "./api";
// eslint-disable-next-line import/no-cycle
import {
  updateCurrentWeatherUI,
  updateForeCastWeatherUI,
  displayErrorMessage,
  tempUnitToggle,
  showLoadingSpinner,
  hideLoadingSpinner,
} from "./ui";

let latestWeatherData = null;

export function getLatestWeatherData() {
  return latestWeatherData;
}

function processWeatherData(locationQuery) {
  showLoadingSpinner();
  fetchWeatherData(locationQuery)
    .then((weatherData) => {
      if (weatherData.error) {
        displayErrorMessage(weatherData.error);
        return;
      }
      updateCurrentWeatherUI(weatherData);
      updateForeCastWeatherUI(weatherData);

      latestWeatherData = weatherData;
    })
    .catch((error) => {
      displayErrorMessage(error.message);
    })
    .finally(() => {
      hideLoadingSpinner();
    });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const locationQueryInput = document.querySelector("#location-query-input");
  const locationQuery = locationQueryInput.value.trim();
  processWeatherData(locationQuery);

  // Clear search input & any error msg display
  locationQueryInput.value = "";
  displayErrorMessage("");
}

export default function initialise() {
  const searchForm = document.querySelector("#location-query");
  searchForm.addEventListener("submit", handleFormSubmit);

  const tempUnitToggleElement = document.querySelector(".temp-toggle");
  tempUnitToggleElement.addEventListener("click", tempUnitToggle);
}
