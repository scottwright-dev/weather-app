/* eslint-disable no-use-before-define */

import { formatDate, formatDateAndTime } from "./utility";

async function fetchAPIData(url) {
  return fetch(url, { mode: "cors" });
}

async function handleAPIResponse(response) {
  if (!response.ok) {
    if (response.status === 400) {
      return {
        success: false,
        error: "Location not found, please try again.",
      };
    }
    return {
      success: false,
      error: `HTTP error! Status: ${response.status}`,
    };
  }

  const apiResponse = await response.json();
  if (!apiResponse) {
    return {
      success: false,
      error: "No Data was fetched from your API call",
    };
  }

  return {
    success: true,
    data: apiResponse,
  };
}

export async function fetchWeatherData(locationQuery) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=dd41ad9a0fc4482f91085416231509&q=${locationQuery}&days=3&aqi=no&alerts=no`;
  const response = await fetchAPIData(url);
  const fetchedData = await handleAPIResponse(response);

  if (!fetchedData.success) {
    throw new Error(fetchedData.error);
  }

  return {
    ...extractLocationData(fetchedData.data),
    ...extractCurrentWeatherData(fetchedData.data),
    forecast: extractForecastData(fetchedData.data),
  };
}

function extractLocationData(data) {
  return {
    locationName: data.location.name,
    locationRegion: data.location.region,
    locationCountry: data.location.country,
    locationLocalTime: formatDateAndTime(data.location.localtime),
  };
}

function extractCurrentWeatherData(data) {
  return {
    currentCondition: data.current.condition.text,
    currentConditionIcon: data.current.condition.icon,
    currentTempC: Math.round(data.current.temp_c),
    feelsLikeC: Math.round(data.current.feelslike_c),
    currentTempF: Math.round(data.current.temp_f),
    feelsLikeF: Math.round(data.current.feelslike_f),
    humidity: data.current.humidity,
    windKph: data.current.wind_kph,
    windMph: data.current.wind_mph,
  };
}

export function extractForecastData(data) {
  return data.forecast.forecastday.map((day) => ({
    date: formatDate(day.date),
    condition: day.day.condition.text,
    icon: day.day.condition.icon,
    avgTempC: Math.round(day.day.avgtemp_c),
    avgTempF: Math.round(day.day.avgtemp_f),
    rainChance: day.day.daily_chance_of_rain,
  }));
}
