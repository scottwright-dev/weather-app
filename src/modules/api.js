async function fetchAPIData(url) {
    return fetch(url, { mode: 'cors' });
}

async function handleAPIResponse(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const fetchedData = await response.json();
    if (!fetchedData) {
        throw new Error("No Data was fetched from your API call");
    }
    return fetchedData;
}

export async function fetchWeatherData(locationQuery) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=dd41ad9a0fc4482f91085416231509&q=${locationQuery}&days=3&aqi=no&alerts=no`;
        const response = await fetchAPIData(url);
        const fetchedData = await handleAPIResponse(response);
        return fetchedData;
    } catch (error) {
        console.log("There was an error fetching the data:", error);
        throw error;
    }
}