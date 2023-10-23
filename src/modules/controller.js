import { fetchWeatherData } from "./api";
import {
  updateCurrentWeatherUI,
  updateForeCastWeatherUI,
  displayErrorMessage,
} from "./ui";

function processWeatherData(locationQuery) {
  fetchWeatherData(locationQuery)
    .then((weatherData) => {
      if (weatherData.error) {
        displayErrorMessage(weatherData.error);
        return;
      }
      updateCurrentWeatherUI(weatherData);
      updateForeCastWeatherUI(weatherData);
    })
    .catch((error) => {
      displayErrorMessage(error.message);
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

function tempUnitToggle() {
  const celsiusToggle = document.querySelector(".celsius-toggle");
  const fahrenheitToggle = document.querySelector(".fahrenheit-toggle");

  if (celsiusToggle.classList.contains("font-bold")) {
    celsiusToggle.classList.remove("font-bold");
    celsiusToggle.classList.add("text-slate-500");

    fahrenheitToggle.classList.add("font-bold");
    fahrenheitToggle.classList.remove("text-slate-500");
  } else {
    celsiusToggle.classList.add("font-bold");
    celsiusToggle.classList.remove("text-slate-500");

    fahrenheitToggle.classList.remove("font-bold");
    fahrenheitToggle.classList.add("text-slate-500");
  }
}
export default function initialise() {
  const searchForm = document.querySelector("#location-query");
  searchForm.addEventListener("submit", handleFormSubmit);

  const tempUnitToggleElement = document.querySelector(".temp-toggle");
  tempUnitToggleElement.addEventListener("click", tempUnitToggle);
}
