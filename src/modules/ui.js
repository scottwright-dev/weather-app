// CURRENT WEATHER DATA

function updateLocationName(location) {
    const locationNameElement = document.querySelector('.location-name');

    locationNameElement.textContent = location;
}

function updateTemperatureValue(temperature) {
    const tempValueElement = document.querySelector('.temp-value');

    tempValueElement.textContent = temperature;
}

function updateFeelsLikeTempValue(feelsLikeTemperature) {
    const feelsLikeElement = document.querySelector('.feels-like-value');

    feelsLikeElement.textContent = feelsLikeTemperature;
}

function updateCurrentConditionText(currentCondition) {
    const currentTextElement = document.querySelector('.current-condition-text');

    currentTextElement.textContent = currentCondition;
}

export function updateCurrentWeatherUI(weatherData) {
    updateLocationName(weatherData.locationName);
    updateTemperatureValue(weatherData.currentTempC);
    updateFeelsLikeTempValue(weatherData.feelsLikeC);
    updateCurrentConditionText(weatherData.currentCondition);
}