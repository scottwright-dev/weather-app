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

async function fetchWeatherData(locationQuery) {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=dd41ad9a0fc4482f91085416231509&q=${locationQuery}&aqi=no`;
        const response = await fetchAPIData(url);
        const fetchedData = await handleAPIResponse(response);
        return fetchedData;
    } catch (error) {
        console.log("There was an error fetching the data:", error);
        throw error;
    }
}

const searchForm = document.querySelector('#location-query');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const locationQuery = document.querySelector('#location-query-input').value;
    fetchWeatherData(locationQuery.trim())
    .then(data => {
        console.log(`The current temperature in ${data.location.name} is ${data.current.temp_c} degrees and the outlook is ${data.current.condition.text}`);
    })
    .catch(error => {
        console.error("Error:", error);
    });
})