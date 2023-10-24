import { getLatestWeatherData } from "./controller";

// variable for toggling C/F
let temperatureUnit = "C";

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

// function updateLocationRegion(region) {
//   const locationRegionElement = document.querySelector(".location-region");

//   locationRegionElement.textContent = region;
// }

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

function updateCurrentWind(windSpeed) {
  const windSpeedElement = document.querySelector(".wind-value");

  windSpeedElement.textContent = windSpeed;
}

function updateCurrentHumidity(humidity) {
  const humidityElement = document.querySelector(".humidity-value");

  humidityElement.textContent = humidity;
}

export function updateCurrentWeatherUI(weatherData) {
  updateLocationName(weatherData.locationName);
  // updateLocationRegion(weatherData.locationRegion);
  updateLocationCountry(weatherData.locationCountry);
  updateTemperatureValue(weatherData.currentTempC, weatherData.currentTempF);
  updateFeelsLikeTempValue(weatherData.feelsLikeC, weatherData.feelsLikeF);
  updateCurrentWeatherIcon(weatherData.currentConditionIcon);
  updateCurrentConditionText(weatherData.currentCondition);
  updateCurrentWind(weatherData.windMph);
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
  const forecastTempValueElement = document.querySelectorAll(".forecast-temp-value")[dayIndex];
  const forecastTempUnitElement = document.querySelectorAll(".forecast-temp-unit")[dayIndex];
  if(temperatureUnit === "C") {
    forecastTempValueElement.textContent = avgTempC;
    forecastTempUnitElement.textContent = '°c';
  } else {
    forecastTempValueElement.textContent = avgTempF;
    forecastTempUnitElement.textContent = '°F';
  }
}

// function updateForecastRainChance(dayIndex, rainChance) {
//   const forecastRainValueElement = document.querySelectorAll(
//     ".forecast-rain-value",
//   )[dayIndex];
//   forecastRainValueElement.textContent = rainChance;
// }

export function updateForeCastWeatherUI(weatherData) {
  const forecastData = weatherData.forecast;

  forecastData.forEach((day, index) => {
    updateForecastDate(index, day.date);
    updateForecastIcon(index, day.icon);
    updateForecastConditionText(index, day.condition);
    updateForecastTemperature(index, day.avgTempC, day.avgTempF);
    // updateForecastRainChance(index, day.rainChance);
  });
}

// TEMP UNIT UI TOGGLE
export function tempUnitToggle() {
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
