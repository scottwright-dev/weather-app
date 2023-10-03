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
        locationName: fetchedData.location.name,
        locationRegion: fetchedData.location.region,
        locationCountry: fetchedData.location.country,
        locationLocalTime: fetchedData.location.localtime,

        currentCondition: fetchedData.current.condition.text,
        currentConditionIcon: fetchedData.current.condition.icon,
        currentTempC: fetchedData.current.temp_c,
        feelsLikeC: fetchedData.current.feelslike_c,
        currentTempF: fetchedData.current.temp_f,
        feelsLikeF: fetchedData.current.feelslike_f,
        humidity: fetchedData.current.humidity,
        windKph: fetchedData.current.wind_kph,
        windMph: fetchedData.current.wind_mph,

        forecast: fetchedData.forecast.forecastday.map(day => ({
            date: day.date,
            condition: day.day.condition.text,
            icon: day.day.condition.icon,
            avgTempC: day.day.avgtemp_c,
            avgTempF: day.day.avgtemp_f,
            rainChance: day.day.daily_chance_of_rain,
        })),
    };
}