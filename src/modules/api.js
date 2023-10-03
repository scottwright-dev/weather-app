/* eslint-disable no-use-before-define */

async function fetchAPIData(url) {
    return fetch(url, { mode: 'cors' });
}

async function handleAPIResponse(response) {
    if (!response.ok) {
        if (response.status === 400) {
            throw new Error("Location not found, please try again.");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const apiResponse = await response.json();
    if (!apiResponse) {
        throw new Error("No Data was fetched from your API call");
    }
    return apiResponse;
}

export async function fetchWeatherData(locationQuery) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=dd41ad9a0fc4482f91085416231509&q=${locationQuery}&days=3&aqi=no&alerts=no`;
    const response = await fetchAPIData(url);
    const fetchedData = await handleAPIResponse(response);

    return {
        ...extractLocationData(fetchedData),
        ...extractCurrentWeatherData(fetchedData),
        forecast: extractForecastData(fetchedData)
    };
}

export function extractLocationData(data) {
    return {
        locationName: data.location.name,
        locationRegion: data.location.region,
        locationCountry: data.location.country,
        locationLocalTime: data.location.localtime
    };
}

export function extractCurrentWeatherData(data) {
    return {
        currentCondition: data.current.condition.text,
        currentConditionIcon: data.current.condition.icon,
        currentTempC: data.current.temp_c,
        feelsLikeC: data.current.feelslike_c,
        currentTempF: data.current.temp_f,
        feelsLikeF: data.current.feelslike_f,
        humidity: data.current.humidity,
        windKph: data.current.wind_kph,
        windMph: data.current.wind_mph
    };
}

export function extractForecastData(data) {
    return data.forecast.forecastday.map(day => ({
        date: day.date,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
        avgTempC: day.day.avgtemp_c,
        avgTempF: day.day.avgtemp_f,
        rainChance: day.day.daily_chance_of_rain
    }));
}