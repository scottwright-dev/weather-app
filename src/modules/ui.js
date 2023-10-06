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
    updateLocationRegion(weatherData.locationRegion)
    updateTemperatureValue(weatherData.currentTempC);
    updateFeelsLikeTempValue(weatherData.feelsLikeC);
    updateCurrentWeatherIcon(weatherData.currentConditionIcon);
    updateCurrentConditionText(weatherData.currentCondition);
    updateCurrentWind(weatherData.windMph);
    updateCurrentHumidity(weatherData.humidity);
}