// ERROR MESSAGING

export function displayErrorMessage(message) {
    const errorDisplayElement = document.querySelector('.search-error-display');
    errorDisplayElement.textContent = message;
}

// CURRENT WEATHER DATA

function updateLocationName(location) {
    const locationNameElement = document.querySelector('.location-name');

    locationNameElement.textContent = location;
}

function updateLocationRegion(region) {
    const locationRegionElement = document.querySelector('.location-region');

    locationRegionElement.textContent = region;
}

function updateLocationCountry(country) {
    const locationCountryElement = document.querySelector('.location-country');

    locationCountryElement.textContent = country;
}

function updateTemperatureValue(temperature) {
    const tempValueElement = document.querySelector('.temp-value');

    tempValueElement.textContent = temperature;
}

function updateFeelsLikeTempValue(feelsLikeTemperature) {
    const feelsLikeElement = document.querySelector('.feels-like-value');

    feelsLikeElement.textContent = feelsLikeTemperature;
}

function updateCurrentWeatherIcon(currentConditionIcon) {
    const currentWeatherIconElement = document.querySelector('.current-condition-icon img');

    currentWeatherIconElement.src = currentConditionIcon;
}

function updateCurrentConditionText(currentCondition) {
    const currentTextElement = document.querySelector('.current-condition-text');

    currentTextElement.textContent = currentCondition;
}

function updateCurrentWind(windSpeed) {
    const windSpeedElement = document.querySelector('.wind-value');

    windSpeedElement.textContent = windSpeed;
}

function updateCurrentHumidity(humidity) {
    const humidityElement = document.querySelector('.humidity-value');

    humidityElement.textContent = humidity;
}

export function updateCurrentWeatherUI(weatherData) {
    updateLocationName(weatherData.locationName);
    updateLocationRegion(weatherData.locationRegion);
    updateLocationCountry(weatherData.locationCountry);
    updateTemperatureValue(weatherData.currentTempC);
    updateFeelsLikeTempValue(weatherData.feelsLikeC);
    updateCurrentWeatherIcon(weatherData.currentConditionIcon);
    updateCurrentConditionText(weatherData.currentCondition);
    updateCurrentWind(weatherData.windMph);
    updateCurrentHumidity(weatherData.humidity);
}

// FORECAST WEATHER DATA

function updateForecastDate(dayIndex, date) {
    const forecastDateElement = document.querySelector(`.forecast-date-${dayIndex + 1}`);
    forecastDateElement.textContent = date;
}

function updateForecastIcon(dayIndex, iconSrc) {
    const forecastIconElement = document.querySelectorAll('.forecast-icon')[dayIndex];
    forecastIconElement.src = iconSrc;
}

function updateForecastConditionText(dayIndex, conditionText) {
    const forecastConditionTextElement = document.querySelectorAll('.forecast-condition-text')[dayIndex];
    forecastConditionTextElement.textContent = conditionText;
}

function updateForecastTemperature(dayIndex, temperature) {
    const forecastTempValueElement = document.querySelectorAll('.forecast-temp-value')[dayIndex];
    forecastTempValueElement.textContent = temperature;
}

function updateForecastRainChance(dayIndex, rainChance) {
    const forecastRainValueElement = document.querySelectorAll('.forecast-rain-value')[dayIndex];
    forecastRainValueElement.textContent = rainChance;
}

export function updateForeCastWeatherUI(weatherData) {
    const forecastData = weatherData.forecast;
    
    forecastData.forEach((day, index) => {
        updateForecastDate(index, day.date);
        updateForecastIcon(index, day.icon);
        updateForecastConditionText(index, day.condition);
        updateForecastTemperature(index, day.avgTempC);
        updateForecastRainChance(index, day.rainChance);
    });
}