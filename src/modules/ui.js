// eslint-disable-next-line import/no-cycle
import { getLatestWeatherData } from "./controller";

// GLOBAL VARIABLES

// for toggling °C/°F units
let temperatureUnit = "C";

// for toggling kph/mph units
let windSpeedUnit = "mph";

// for timeout loading spinner
let spinnerTimeout;

// ERROR MESSAGING

export function displayErrorMessage(message) {
  const errorDisplayElement = document.querySelector(".search-error-display");
  errorDisplayElement.textContent = message;
}

// CURRENT WEATHER DATA

function updateLocationName(location) {
  const locationNameElement = document.querySelector(".location-name");

  locationNameElement.textContent = location;
}

function updateLocationCountry(country) {
  const locationCountryElement = document.querySelector(".location-country");

  locationCountryElement.textContent = country;
}

function updateTemperatureValue(temperatureC, temperatureF) {
  const tempValueElement = document.querySelector(".temp-value");
  const tempUnitElement = document.querySelector(".temp-unit");

  if (temperatureUnit === "C") {
    tempValueElement.textContent = temperatureC;
    tempUnitElement.textContent = "°C";
  } else {
    tempValueElement.textContent = temperatureF;
    tempUnitElement.textContent = "°F";
  }
}

function updateFeelsLikeTempValue(
  feelsLikeTemperatureC,
  feelsLikeTemperatureF,
) {
  const feelsLikeElement = document.querySelector(".feels-like-value");
  const feelsLikeUnitElement = document.querySelector(".feels-like-unit-type");

  if (temperatureUnit === "C") {
    feelsLikeElement.textContent = feelsLikeTemperatureC;
    feelsLikeUnitElement.textContent = "°C";
  } else {
    feelsLikeElement.textContent = feelsLikeTemperatureF;
    feelsLikeUnitElement.textContent = "°F";
  }
}

function updateCurrentWeatherIcon(currentConditionIcon) {
  const currentWeatherIconElement = document.querySelector(
    ".current-condition-icon img",
  );

  currentWeatherIconElement.src = currentConditionIcon;
}

function updateCurrentConditionText(currentCondition) {
  const currentTextElement = document.querySelector(".current-condition-text");

  currentTextElement.textContent = currentCondition;
}

function updateCurrentWind(windSpeedMph, windSpeedKph) {
  const windSpeedElement = document.querySelector(".wind-value");
  const windUnitTypeElement = document.querySelector(".wind-unit-type");

  if (windSpeedUnit === "kph") {
    windSpeedElement.textContent = windSpeedKph;
    windUnitTypeElement.textContent = "kph";
  } else {
    windSpeedElement.textContent = windSpeedMph;
    windUnitTypeElement.textContent = "mph";
  }
}

function updateCurrentHumidity(humidity) {
  const humidityElement = document.querySelector(".humidity-value");

  humidityElement.textContent = humidity;
}

export function updateCurrentWeatherUI(weatherData) {
  updateLocationName(weatherData.locationName);
  updateLocationCountry(weatherData.locationCountry);
  updateTemperatureValue(weatherData.currentTempC, weatherData.currentTempF);
  updateFeelsLikeTempValue(weatherData.feelsLikeC, weatherData.feelsLikeF);
  updateCurrentWeatherIcon(weatherData.currentConditionIcon);
  updateCurrentConditionText(weatherData.currentCondition);
  updateCurrentWind(weatherData.windMph, weatherData.windKph);
  updateCurrentHumidity(weatherData.humidity);
}

// FORECAST WEATHER DATA

function updateForecastDate(dayIndex, date) {
  const forecastDateElement = document.querySelector(
    `.forecast-date-${dayIndex + 1}`,
  );
  forecastDateElement.textContent = date;
}

function updateForecastIcon(dayIndex, iconSrc) {
  const forecastIconElement =
    document.querySelectorAll(".forecast-icon")[dayIndex];
  forecastIconElement.src = iconSrc;
}

function updateForecastConditionText(dayIndex, conditionText) {
  const forecastConditionTextElement = document.querySelectorAll(
    ".forecast-condition-text",
  )[dayIndex];
  forecastConditionTextElement.textContent = conditionText;
}

function updateForecastTemperature(dayIndex, avgTempC, avgTempF) {
  const forecastTempValueElement = document.querySelectorAll(
    ".forecast-temp-value",
  )[dayIndex];
  const forecastTempUnitElement = document.querySelectorAll(
    ".forecast-temp-unit",
  )[dayIndex];
  if (temperatureUnit === "C") {
    forecastTempValueElement.textContent = avgTempC;
    forecastTempUnitElement.textContent = "°C";
  } else {
    forecastTempValueElement.textContent = avgTempF;
    forecastTempUnitElement.textContent = "°F";
  }
}

export function updateForeCastWeatherUI(weatherData) {
  const forecastData = weatherData.forecast;

  forecastData.forEach((day, index) => {
    updateForecastDate(index, day.date);
    updateForecastIcon(index, day.icon);
    updateForecastConditionText(index, day.condition);
    updateForecastTemperature(index, day.avgTempC, day.avgTempF);
  });
}

// WIND SPEED UNIT TOGGLE

function setWindSpeedUnit() {
  if (temperatureUnit === "C") {
    windSpeedUnit = "kph"; // Set windSpeedUnit to kph when Celsius is active
  } else {
    windSpeedUnit = "mph"; // Set windSpeedUnit to mph when Fahrenheit is active
  }
}

// TEMP UNIT UI TOGGLE

export function tempUnitToggle() {
  setWindSpeedUnit();

  const celsiusToggle = document.querySelector(".celsius-toggle");
  const fahrenheitToggle = document.querySelector(".fahrenheit-toggle");

  if (celsiusToggle.classList.contains("font-bold")) {
    celsiusToggle.classList.remove("font-bold");
    celsiusToggle.classList.add("text-slate-500");

    fahrenheitToggle.classList.add("font-bold");
    fahrenheitToggle.classList.remove("text-slate-500");

    temperatureUnit = "F";
  } else {
    celsiusToggle.classList.add("font-bold");
    celsiusToggle.classList.remove("text-slate-500");

    fahrenheitToggle.classList.remove("font-bold");
    fahrenheitToggle.classList.add("text-slate-500");

    temperatureUnit = "C";
  }

  updateCurrentWeatherUI(getLatestWeatherData());
  updateForeCastWeatherUI(getLatestWeatherData());
}

// LOADING DATA SPINNER

export function showLoadingSpinner() {
  spinnerTimeout = setTimeout(() => {
    const spinnerElement = document.querySelector(".loading-spinner");
    spinnerElement.classList.remove("hidden");
    spinnerElement.classList.add("show");
  }, 300);
}

export function hideLoadingSpinner() {
  clearTimeout(spinnerTimeout);
  const spinnerElement = document.querySelector(".loading-spinner");
  spinnerElement.classList.add("hidden");
  spinnerElement.classList.remove("show");
}
